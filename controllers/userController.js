// bring in prisma and cookie

const { Prisma } = require("@prisma/client");
const prisma = require("../prisma/index");
const cookieToken = require("../utlis/cookieToken");
const bcrypt = require("bcrypt");

// user signup
exports.signup = async (req, res, next) => {
  try {
    let { name, email, password } = req.body;

    
    // Hash password
    const hashedPassword = bcrypt.hashSync(password, 8);

    // check
    if (!name || !email || !password) {
      throw new Error("Please provide all credentials");
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        fromGoogle:false
      },
    });

    // send user a token
    cookieToken(user, res);
  } catch (error) {
    throw new Error(error);
  }
};

// Login User
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error("Please enter all credentials");
    }

    // find user from collection
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new Error("User not found.");
    }

    // Password mismatch
    const validatePassword = bcrypt.compareSync(password, user.password);
    if (!validatePassword) {
      throw new Error("Password is incorrect!");
    }

    // user is there and validation
    cookieToken(user, res);
  } catch (error) {
    throw new Error(error.message);
  }
};

// Singup using Google
exports.signupGoogle = async (req, res, next) => {
  try {
    const user = await prisma.user.findUnique({ email: req.body.email });

    if (user) {
      cookieToken(user, res);
    } else {
      const newUser = await prisma.user.create({
        ...req.body,
        fromGoogle: true,
      });
      cookieToken(newUser, res);
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong.",
    });
  }
};

// user logout
exports.logout = async (req, res, next) => {
  try {
    res.clearCookie("token");
    res.json({
      success: true,
    });
  } catch (error) {
    throw new Error(error);
  }
};

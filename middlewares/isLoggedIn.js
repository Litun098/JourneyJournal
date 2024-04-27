const prisma = require("../prisma/index");

const jwt = require("jsonwebtoken");

const isLoggedIn = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      res.send("Please Login");
      throw new Error("You are not Logged in.");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await prisma.user.findUnique({
      where: {
        id: decoded.userId,
      },
    });
    req.userId = req.user.id
    next(); 
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = isLoggedIn;

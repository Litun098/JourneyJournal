const prisma = require("../prisma/index");

// create a new post
exports.createPost = async (req, res, next) => {
  try {
    const { title, body, slug } = req.body;
    const authorId = req.userId;

    const result = await prisma.post.create({
      data: { title, body, slug, author: { connect: { id: authorId } } },
    });

    res.json(result);
  } catch (error) {
    throw new Error(error);
  }
};

// Update an existing post
exports.updatePost = async (req, res, next) => {
  const { id } = req.params;
  const { title, body } = req.body;
  const updatedAt = new Date();

  try {
    const user_id = req.userId;
    const findPost = await prisma.post.findUnique({
      where: {
        id,
      },
    });
    if (user_id !== findPost.authorId) {
      return res.json({
        message: "Only author can edit the post",
      });
    }
    const updatedResult = await prisma.post.update({
      where: { id: id },
      data: { title: title, body: body },
    });

    res.json(updatedResult);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
    throw new Error(error);
  }
};

// delete a post
exports.deletePost = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await prisma.post.delete({
      where: { id: id },
    });
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong." });
    throw new Error(err);
  }
};

// get all post
exports.getPosts = async (req, res, next) => {
  try {
    const result = await prisma.post.findMany();
    res.status(200).json(result);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Something went wrong." });
  }
};

// Get one post
exports.getPost = async (req, res, next) => {
  try {
    const id = req.params.id;

    const result = await prisma.post.findUnique({
      where: {
        id,
      },
      include:{
        Comment:true
      }
    });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong." });
  }
};

// Get all post of an  author
exports.getAuthorPost = async (req, res, next) => {
  try {
    const authorId = req.params.id;

    const posts = await prisma.post.findMany({
      where: {
        authorId: authorId,
      },
      include: {
        // author: true, // Include author details for each post
        Comment: {   // Include comments for each post
          include: {
            author: true // Include comment author details
          }
        }
      }
    });

    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong." });
  }
};

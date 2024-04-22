const prisma = require("../prisma/index");
// Create Comment

exports.createComment = async (req, res, next) => {
  try {
    const comment = req.body.comment;
    const authorId = req.userId;
    const postId = req.params.id;
    console.log(comment, authorId, postId);

    const savedComment = await prisma.comment.create({
      data: {
        comment,
        author: { connect: { id: authorId } },
        post: { connect: { id: postId } },
      },
    });
    return res.status(200).json({
      success: true,
      savedComment
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

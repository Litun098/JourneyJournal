const express = require("express");
const router = express.Router();

const isLoggedIn = require("../middlewares/isLoggedIn");
const {
  createPost,
  updatePost,
  deletePost,
  getPosts,
  getPost,
  getAuthorPost,
} = require("../controllers/postController");

// create a post
router.route("/post/create").post(isLoggedIn, createPost);
// update a post by Id
router.route("/post/update/:id").put(isLoggedIn, updatePost);
// Delete a post by id
router.route("/post/delete/:id").delete(isLoggedIn, deletePost);
// Get all posts
router.route("/post").get(getPosts);
// get a post by Id
router.route("/post/:id").get(getPost);
// get a post by author Id
router.route("/post/author/:id").get(getAuthorPost);

module.exports = router;

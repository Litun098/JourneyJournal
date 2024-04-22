const express = require("express");
const router = express.Router();

const { createComment } = require("../controllers/commentController");
const isLoggedIn = require("../middlewares/isLoggedIn");

router.route('/comment/:id').post(isLoggedIn,createComment);

module.exports = router
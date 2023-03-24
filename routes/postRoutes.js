const { Router } = require("express");
const { getAllPosts, getPost, createPost, updatePost, deletePost, getPostComments, createPostComment } = require("../controllers/postController");
const { authenticateUser, authorizePermissions } = require("../middlewares/authenticateUser");
const restrictTestUser = require("../middlewares/restrictTestUser");

const router = Router();

router.use(authenticateUser)

router
  .route("/")
  .get(getAllPosts)
  .post(restrictTestUser, authorizePermissions("admin"), createPost)

router
  .route("/:id")
  .get(getPost)
  .patch(restrictTestUser, authorizePermissions("admin"), updatePost)
  .delete(restrictTestUser, authorizePermissions("admin"), deletePost)

router
  .route("/:id/comments")
  .get(getPostComments)
  .post(restrictTestUser, createPostComment)

module.exports = router
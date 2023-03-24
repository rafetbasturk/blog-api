const { Router } = require("express");
const { register, login, logout, getCurrentUser } = require("../controllers/authController");
const { authenticateUser } = require("../middlewares/authenticateUser");

const router = Router()

router.route("/register").post(register)
router.route("/login").post(login)
router.route("/logout").get(logout)
router.route("/getCurrentUser").get(authenticateUser, getCurrentUser)

module.exports = router
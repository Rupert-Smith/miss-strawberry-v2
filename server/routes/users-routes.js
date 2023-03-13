const express = require("express");
const authController = require("../controllers/auth-controller");

const router = express.Router();

router.post("/create-account", authController.createAccount);
router.post("/login", authController.login);
router.get("/logout", authController.logout);

module.exports = router;

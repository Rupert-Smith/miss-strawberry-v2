const express = require("express");
const authController = require("../controllers/create-account-controller");

const router = express.Router();

router.post("/create-account", authController.createAccount);

module.exports = router;

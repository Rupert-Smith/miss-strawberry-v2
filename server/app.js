const express = require("express");
const userRouter = require("./routes/user-routes");
const cors = require("cors");

// Start express app
const app = express();

// app.get("/", (req, res) => {
//   res.status(200).json({ message: "ssss!", app: "" });
// });

// 1) GLOBAL MIDDLEWARES

// Implement CORS
app.use(cors());

// Body parser, reading data from body into req.body
app.use(express.json());

// 3) ROUTES
// "/create-account" will be appended to the URL below ("/api/v1/users")
app.use("/api/v1/users", userRouter);

module.exports = app;

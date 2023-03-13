const express = require("express");
const userRouter = require("./routes/users-routes");
const recipeRouter = require("./routes/recipes-routes");
const cors = require("cors");
const AppError = require("./utilities/appError");

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
app.use("/api/v1/recipes", recipeRouter);

// 4) ERROR MESSAGES

// convert to json instead of HTML
app.use((err, req, res, next) => {
  console.log("ERROR:");
  console.log(err);

  res.status(500).send({ error: err });
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  // pass the error to the default error handler
  return next(err);
});

module.exports = app;

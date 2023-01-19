const express = require("express");
const mongoose = require("mongoose");
// const app = express();
const app = require("./app");
const dotenv = require("dotenv");
const port = process.env.PORT || 5000;

// Our server.js file is where the listening happens. When a user sends a request to our application, it will arrive at this file first. Then the server.js file sends this request to the routes file, which will then process the request and send back a response.

dotenv.config({ path: "./config.env" });

const DATABASE_WITH_PASSWORD = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DATABASE_WITH_PASSWORD, () => {
  console.log("Database connected");
});

const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

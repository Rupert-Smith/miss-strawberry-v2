const catchAsync = require("../utilities/catchAsync");
const AppError = require("../utilities/appError");
const User = require("./../models/user-model");
const jwt = require("jsonwebtoken");
const { request } = require("express");
const { promisify } = require("util");

const signToken = (id) => {
  // first argument is all the data we want to store inside of the token.

  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, req, res) => {
  const token = signToken(user._id);

  res.cookie("jwt", token, {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: req.secure || req.headers["x-forwarded-proto"] === "https",
  });

  // Remove password from output
  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

// When a 'create-account' PUT request is recieved, this function will be carried out. We are using the "CreatAccount" schema as a template
exports.createAccount = catchAsync(async (request, response, next) => {
  const newUser = await User.create({
    username: request.body.username,
    password: request.body.password,
    passwordConfirm: request.body.passwordConfirm,
    email: request.body.email,
  });

  // once the data has been collected, we then store it in the database

  // const url = `${req.protocol}://${req.get("host")}/me`;
  // console.log(url);
  // await new Email(newUser, url).sendWelcome();

  createSendToken(newUser, 201, request, response);
});

exports.login = catchAsync(async (req, res, next) => {
  // trim white space from username

  const username = req.body.username.trim();
  const password = req.body.password;

  // 1) Check if email and password exist
  if (!username || !password) {
    return next(new AppError("please provide username and password", 400));

    // return res
    //   .status(400)
    //   .json({ message: "Please provide username and password" });
  }
  // // 2) Check if user exists && password is correct
  // We need to retrieve the password in order to make sure it is correct. Find will not include the password
  const userFromDatabase = await User.findOne({ username }).select("+password");

  if (
    !userFromDatabase ||
    !(await userFromDatabase.correctPassword(
      password,
      userFromDatabase.password
    ))
  ) {
    return next(new AppError("incorrect email or password", 401));
  }

  // // 3) If everything ok, send token to client
  createSendToken(userFromDatabase, 200, req, res);
});

exports.isLoggedIn = async (req, res, next) => {
  if (req.cookies.jwt) {
    try {
      // 1) verify token
      const decoded = await promisify(jwt.verify)(
        req.cookies.jwt,
        process.env.JWT_SECRET
      );

      // 2) Check if user still exists
      const currentUser = await User.findById(decoded.id);
      if (!currentUser) {
        return next();
      }

      // 3) Check if user changed password after the token was issued
      if (currentUser.changedPasswordAfter(decoded.iat)) {
        return next();
      }

      // THERE IS A LOGGED IN USER
      res.locals.user = currentUser;
      return next();
    } catch (err) {
      return next();
    }
  }
  next();
};

exports.logout = (req, res) => {
  res.cookie("jwt", "loggedout", {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });
  res.status(200).json({ status: "success" });
};

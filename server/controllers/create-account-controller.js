const catchAsync = require("../utilities/catchAsync");
const AppError = require("../utilities/appError");
const CreateAccount = require("./../models/create-account-model");
const { request } = require("express");

// When a 'create-account' PUT request is recieved, this function will be carried out. We are using the "CreatAccount" schema as a template
exports.createAccount = (request, response, next) => {
  const signedUpUser = new CreateAccount({
    username: request.body.username,
    password: request.body.password,
    email: request.body.email,
  });
  // once the data has been collected, we then store it in the database
  signedUpUser
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => {
      console.log(error);
      response.json(error);
    });
};

// exports.login = catchAsync(async (req, res, next) => {
//   const { email, password } = req.body;

//   // 1) Check if email and password exist
//   if (!email || !password) {
//     return next(new AppError("Please provide email and password!", 400));
//   }
//   // 2) Check if user exists && password is correct
//   const user = await User.findOne({ email }).select("+password");

//   if (!user || !(await user.correctPassword(password, user.password))) {
//     return next(new AppError("Incorrect email or password", 401));
//   }

//   // 3) If everything ok, send token to client
//   createSendToken(user, 200, req, res);
// });

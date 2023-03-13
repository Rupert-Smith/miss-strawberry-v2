const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "please provide a username"],
    unique: true, // here we make sure there will be no two users with the same username
  },
  password: {
    type: String,
    required: [true, "please provide a password"],
    minLength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "please confirm your password"], // required as an input, not required to be persisted in the database
    minLength: 8,
    validate: {
      // This only works on CREATE and SAVE!!!
      validator: function (el) {
        return el === this.password;
      },
      message: "please make sure both passwords match",
    },
    select: false,
  },
  email: {
    type: String,
    required: [true, "please provide an email address"],
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  photo: { type: String },
  date: {
    type: Date,
    default: Date.now,
  },
  // passwordChangedAt: Date,
  // passwordResetToken: String,
  // passwordResetExpires: Date,
});

userSchema.plugin(uniqueValidator, {
  message: "username has been taken!",
});

userSchema.methods.correctPassword = async function (
  inputPassword,
  userPassword
) {
  return await bcrypt.compare(inputPassword, userPassword);
};

userSchema.pre("save", async function (next) {
  // Only run this function if password was actually modified
  if (!this.isModified("password")) return next();

  // Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  // nullify passwordConfirm field
  this.passwordConfirm = undefined;

  // trim white space from username
  this.username = this.username.trim();

  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

// userSchema.pre("save", function (next) {
//   if (!this.isModified("password") || this.isNew) return next();

//   this.passwordChangedAt = Date.now() - 1000;
//   next();
// });

// userSchema.pre(/^find/, function (next) {
//   // this points to the current query
//   this.find({ active: { $ne: false } });
//   next();
// });

module.exports = mongoose.model("users", userSchema);

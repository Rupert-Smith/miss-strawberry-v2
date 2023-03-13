const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");
const uniqueValidator = require("mongoose-unique-validator");

const ingredientSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  blockData: {
    ingredient: {
      type: String,
    },
    amount: {
      type: Number,
    },
    unit: {
      type: String,
    },
    category: {
      type: String,
    },
  },
});
const blockSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  blockData: {
    type: String,
  },
});

const recipesSchema = new mongoose.Schema({
  meta: {
    favourite: { type: Boolean },
  },
  overview: {
    title: {
      type: String,
      required: [true, "please provide a title"],
      minLength: 1,
      unique: true,
    },
    cookingTime: {
      type: String,
      required: [true, "please provide a cooking time"],
    },
    country: { type: String },
    defaultServingNumber: {
      type: Number,
      required: [true, "please provide default serving number"],
    },
    price: {
      type: Number,
      required: [true, "please provide an estimated price"],
    },
    rootDirectory: { type: String },
    subDirectory: { type: String },
    rating: { type: Number, required: [true, "please provide a rating"] },
    vegetarian: { type: Boolean },
    vegan: { type: Boolean },
    link: { type: String },
    // image: { data: Buffer, contentType: String },
    // image: { data: Buffer, type: "Buffer" },
    image: { type: String },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  ingredients: [ingredientSchema],
  steps: [blockSchema],
  tips: [blockSchema],
  tags: [blockSchema],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("recipes", recipesSchema);

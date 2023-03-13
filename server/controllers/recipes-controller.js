const catchAsync = require("../utilities/catchAsync");
const AppError = require("../utilities/appError");
const Recipe = require("../models/recipes-model");
const { request } = require("express");
const factory = require("./handler-factory");

exports.createRecipe = factory.createOne(Recipe);
exports.updateRecipe = factory.updateOne(Recipe);

exports.searchRecipes = catchAsync(async (req, res, next) => {
  const searchQuery = req.query["search_query"];

  let recipes = [];

  // if no search query, return all results

  if (!searchQuery) {
    recipes = await Recipe.find();
  }
  if (searchQuery) {
    const titleMatch = await Recipe.find({
      "overview.title": { $regex: new RegExp("^" + searchQuery + ".*", "i") },
    });
    const tagMatch = await Recipe.find({
      tags: {
        $elemMatch: {
          blockData: { $regex: new RegExp("^" + searchQuery + ".*", "i") },
        },
      },
    });

    const countriesMatch = await Recipe.find({
      "overview.country": {
        $regex: new RegExp("^" + searchQuery + ".*", "i"),
      },
    });

    const vegetarianMatch = await findBooleanMatches(
      "vegetarian",
      "overview.vegetarian"
    );

    const veganMatch = await findBooleanMatches("vegan", "overview.vegan");

    const rootDirectoryMatch = await Recipe.find({
      "overview.rootDirectory": {
        $regex: new RegExp("^" + searchQuery + ".*", "i"),
      },
    });

    async function findBooleanMatches(matchString, directory) {
      if (searchQuery === matchString) {
        return await Recipe.find({
          [directory]: true,
        });
      }
      return [];
    }

    const matches = [
      titleMatch,
      countriesMatch,
      rootDirectoryMatch,
      vegetarianMatch,
      veganMatch,
      tagMatch,
    ];

    matches.forEach((match) => {
      recipes.push(...match);
    });
  }

  // recipes.forEach((recipe) => {
  //   const bufferString = Buffer.from(recipe.overview.image).toString("base64");

  //   recipe.overview.image = bufferString;
  // });

  res.status(200).json({
    status: "success",
    results: recipes.length,
    data: recipes,
  });
});

exports.getFavourites = catchAsync(async (req, res, next) => {
  const favourites = await Recipe.find({
    meta: { favourite: true },
  });

  res.status(200).json({
    status: "success",
    results: favourites.length,
    data: favourites,
  });
});

exports.getRootDirectory = catchAsync(async (req, res, next) => {
  const rootDirectory = req.query["root_directory"];

  const recipes = await Recipe.find({
    "overview.rootDirectory": rootDirectory,
  });

  res.status(200).json({
    status: "success",
    results: recipes.length,
    data: recipes,
  });
});

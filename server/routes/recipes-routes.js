const express = require("express");
const recipeController = require("../controllers/recipes-controller");

const router = express.Router();

router
  .route("/:id")
  // .get(tourController.getTour)
  .patch(
    // authController.protect,
    // authController.restrictTo("admin", "lead-guide"),
    // tourController.uploadTourImages,
    // tourController.resizeTourImages,
    recipeController.updateRecipe
  );
// .delete(
//   authController.protect,
//   authController.restrictTo("admin", "lead-guide"),
//   tourController.deleteTour
// );

router.post("/create-recipe", recipeController.createRecipe);

router.route("/search").get(recipeController.searchRecipes);

router.route("/favourites").get(recipeController.getFavourites);

router.route("/directories").get(recipeController.getRootDirectory);

module.exports = router;

import { useSelector } from "react-redux";
import { RootState } from "store";
import { TypeRecipe } from "common/types/common-types";
import { useState, useEffect } from "react";

export default function useGetCurrentRecipe() {
  // const currentSelectedRecipeId = useSelector(
  //   (state: RootState) => state.recipes.currentSelectedRecipeId
  // );

  const results: TypeRecipe[] = useSelector(
    (state: RootState) => state.results.currentResults
  );

  let recipeDefault: TypeRecipe = {
    _id: "",
    meta: { favourite: false },
    overview: {
      title: "",
      image: "",
      cookingTime: "",
      price: null,
      rating: null,
      country: "",
      servings: null,
      vegetarian: null,
      vegan: null,
      source: { type: "", value: "" },
    },
    ingredients: [],
    steps: [],
    tags: [],
    tips: [],
  };

  // const [recipe, setRecipe] = useState(recipeDefault);

  // useEffect(() => {
  //   // if recipeCard is in view, the recipe n
  //   if (currentSelectedRecipeId !== "") {
  //     setRecipe(
  //       results.find((result) => {
  //         return result._id === currentSelectedRecipeId;
  //       }) || recipeDefault
  //     );
  //   }
  // }, [currentSelectedRecipeId, results]);

  // return { recipe };
}

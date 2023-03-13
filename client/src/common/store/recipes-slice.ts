import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TypeRecipe } from "common/types/common-types";

const recipeState = {
  // currentSelectedRecipeId: "",
  currentlySelectedRecipe: {
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
  },
};

const recipeSlice = createSlice({
  name: "recipe",
  initialState: recipeState,
  reducers: {
    // setCurrentSelectedRecipeId(state, action: any) {
    //   state.currentSelectedRecipeId = action.payload;
    // },
    setCurrentSelectedRecipe(state, action: any) {
      state.currentlySelectedRecipe = action.payload;
    },
  },
});

export const recipeActions = recipeSlice.actions;

export default recipeSlice.reducer;

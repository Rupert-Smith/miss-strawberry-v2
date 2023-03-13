import { createSlice } from "@reduxjs/toolkit";

const createRecipeState = {
  overview: {
    title: "",
    cookingTime: "",
    defaultServingNumber: null,
    price: null,
    rootDirectory: null,
    subDirectory: null,
    rating: null,
    vegetarian: null,
    vegan: null,
    link: "",
    country: "",
  },
  ingredients: [],
  steps: [],
  tips: [],
  tags: [],
};

const createRecipeSlice = createSlice({
  name: "createRecipe",
  initialState: createRecipeState,
  reducers: {
    setOverview(state, action: any) {
      state.overview = action.payload;
    },
    setIngredients(state, action: any) {
      state.ingredients = action.payload;
    },
    setSteps(state, action: any) {
      state.steps = action.payload;
    },
    setTips(state, action: any) {
      state.tips = action.tips;
    },
    setTags(state, action: any) {
      state.tags = action.payload;
    },
  },
});

export const createRecipeActions = createRecipeSlice.actions;

export default createRecipeSlice.reducer;

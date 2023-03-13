import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "common/store/cards-slice";
import recipesReducer from "common/store/recipes-slice";
import authReducer from "features/auth/store/auth-slice";
import createRecipeReducer from "redundant-code/store/create-recipe-slice";
import recipeLayoutSlice from "features/recipe/store/recipe-layout-slice";
import audioSlice from "common/store/audio-slice";
import profileSettingsSlice from "common/store/profile-settings-slice";
import resultsSlice from "features/results/store/results-slice";
import headerSidebarSlice from "common/store/header-sidebar-slice";

const missStrawberryStore = configureStore({
  reducer: {
    cards: cardsReducer,
    auth: authReducer,
    createRecipe: createRecipeReducer,
    recipes: recipesReducer,
    recipeLayout: recipeLayoutSlice,
    audio: audioSlice,
    profileSettings: profileSettingsSlice,
    results: resultsSlice,
    sidebarHeader: headerSidebarSlice,
  },
});

export default missStrawberryStore;

export type RootState = ReturnType<typeof missStrawberryStore.getState>;
export type AppDispatch = typeof missStrawberryStore.dispatch;

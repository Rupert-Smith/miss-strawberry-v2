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
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  cards: cardsReducer,
  auth: authReducer,
  createRecipe: createRecipeReducer,
  recipes: recipesReducer,
  recipeLayout: recipeLayoutSlice,
  audio: audioSlice,
  profileSettings: profileSettingsSlice,
  results: resultsSlice,
  sidebarHeader: headerSidebarSlice,
});
const persistConfig = {
  key: "root",
  storage,
  // whitelist: ["auth", "results", "cards", "results", ], // only persist the 'auth' slice of state
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const missStrawberryStore = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(missStrawberryStore);

export default missStrawberryStore;

export type RootState = ReturnType<typeof missStrawberryStore.getState>;
export type AppDispatch = typeof missStrawberryStore.dispatch;

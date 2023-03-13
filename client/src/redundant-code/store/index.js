// import cardsReducer from "common/store/cards-slice";
// import recipesReducer from "common/store/recipes-slice";
// import authReducer from "features/auth/store/auth-slice";
// import createRecipeReducer from "redundant-code/store/create-recipe-slice";
// import recipeLayoutSlice from "features/recipe/store/recipe-layout-slice";
// import audioSlice from "common/store/audio-slice";
// import profileSettingsSlice from "common/store/profile-settings-slice";
// import resultsSlice from "features/results/store/results-slice";

// import { AnyAction, combineReducers, configureStore } from "@reduxjs/toolkit";

// const appReducer = combineReducers({
//   cards: cardsReducer,
//   auth: authReducer,
//   createRecipe: createRecipeReducer,
//   recipes: recipesReducer,
//   recipeLayout: recipeLayoutSlice,
//   audio: audioSlice,
//   profileSettings: profileSettingsSlice,
//   results: resultsSlice,
// });

// const reducerProxy = (state: any, action: AnyAction) => {
//   if (action.type === "logout/LOGOUT") {
//     return appReducer(undefined, action);
//   }
//   return appReducer(state, action);
// };

// const missStrawberryStore = configureStore({
//   reducer: reducerProxy,
// });

// export default missStrawberryStore;

// export type RootState = ReturnType<typeof missStrawberryStore.getState>;
// export type AppDispatch = typeof missStrawberryStore.dispatch;

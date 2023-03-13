import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type viewModulesConditionType = {
  moduleId: string;
  collapse: boolean;
  state: string;
};

const recipeLayoutState: {
  viewModulesCondition: {
    [key: string]: boolean;
  };
  createModulesCondition: { [key: string]: boolean };
} = {
  viewModulesCondition: {
    overview: false,
    ingredients: false,
    steps: false,
    tags: false,
    tips: false,
  },
  createModulesCondition: {
    overview: false,
    ingredients: false,
    steps: false,
    tags: true,
    tips: true,
  },
};

const recipeLayoutSlice = createSlice({
  name: "recipeLayout",
  initialState: recipeLayoutState,
  reducers: {
    setModulesCondition(
      state,
      action: PayloadAction<viewModulesConditionType>
    ) {
      if (action.payload.state === "create") {
        state.createModulesCondition = {
          ...state.createModulesCondition,
          [action.payload.moduleId]: action.payload.collapse,
        };
      }
      if (action.payload.state === "view") {
        state.viewModulesCondition = {
          ...state.viewModulesCondition,
          [action.payload.moduleId]: action.payload.collapse,
        };
      }
    },
  },
});

export const recipeLayoutActions = recipeLayoutSlice.actions;

export default recipeLayoutSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type currentOpenFeatureCards = {
  cardAction: string;
  cardId: string;
};

const commonAppState = {
  currentOpenFeatureCards: [""],
  currentSelectedRecipe: {},
  currentResults: {},
};

const commonAppSlice = createSlice({
  name: "commonApp",
  initialState: commonAppState,
  reducers: {
    setCurrentOpenFeatureCards(
      state,
      action: PayloadAction<currentOpenFeatureCards>
    ) {
      switch (action.payload.cardAction) {
        case "add": {
          if (!state.currentOpenFeatureCards.includes(action.payload.cardId)) {
            state.currentOpenFeatureCards.push(action.payload.cardId);
          }
          break;
        }
        case "remove": {
          state.currentOpenFeatureCards = state.currentOpenFeatureCards.filter(
            (card) => card !== action.payload.cardId
          );
        }
      }
    },
  },
});

export const commonAppActions = commonAppSlice.actions;

export default commonAppSlice.reducer;

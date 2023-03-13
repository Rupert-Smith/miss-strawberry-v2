import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type currentOpenFeatureCards = {
  cardAction: string;
  cardId: string;
};

const defaultCards: [] = [];

const cardsState: { currentOpenFeatureCards: string[] } = {
  currentOpenFeatureCards: defaultCards,
};

const cardsSlice = createSlice({
  name: "cards",
  initialState: cardsState,
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
    resetDefaultCards(state) {
      state.currentOpenFeatureCards = defaultCards;
    },
  },
});

export const cardsActions = cardsSlice.actions;

export default cardsSlice.reducer;

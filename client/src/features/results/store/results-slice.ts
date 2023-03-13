import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TypeRecipe } from 'common/types/common-types';

const resultsState: { currentResults: TypeRecipe[]; resultsHeaderId: string } =
  {
    currentResults: [],
    resultsHeaderId: '',
  };

const resultsSlice = createSlice({
  name: 'results',
  initialState: resultsState,
  reducers: {
    setCurrentResults(state, action: any) {
      state.currentResults = action.payload;
    },
    setResultHeaderId(state, action: any) {
      state.resultsHeaderId = action.payload;
    },
    addRecipeToResults(state, action: any) {
      state.currentResults.push(action.payload);
    },
    updateOne(state, action: any) {
      const recipeToUpdateIndex: number = state.currentResults.findIndex(
        (result: TypeRecipe) => {
          return result._id === action.payload._id;
        }
      );

      // if we have favourites results open and we remove the currently selected recipe from favouites, we need this to be reflected in the results card
      if (
        state.resultsHeaderId === 'favourites' &&
        !action.payload.meta.favourite
      ) {
        state.currentResults.splice(recipeToUpdateIndex, 1);
      }

      // likewise if we have the favourites card open and we ADD the currently selected recipe to favouites:
      if (
        state.resultsHeaderId === 'favourites' &&
        action.payload.meta.favourite
      ) {
        state.currentResults.push(action.payload);
      }
      // this is the default behaviour if favourites is NOT open - we simply update the results accordingly
      else if (state.currentResults.length > 0) {
        state.currentResults[recipeToUpdateIndex] = action.payload;
      }
    },
  },
});

export const resultsActions = resultsSlice.actions;

export default resultsSlice.reducer;

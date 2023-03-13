import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TypeRecipe } from "common/types/common-types";

const audioState = {
  audioConfig: { audio: "", play: false },
};

const audioSlice = createSlice({
  name: "audio",
  initialState: audioState,
  reducers: {
    setAudioConfig(state, action: any) {
      state.audioConfig = action.payload;
    },
  },
});

export const audioActions = audioSlice.actions;

export default audioSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TypeRecipe } from "common/types/common-types";

const profileDefault = { username: "", email: false };

const profileSettingsState = {
  profile: profileDefault,
};

const profileSettingsSlice = createSlice({
  name: "profileSettings",
  initialState: profileSettingsState,
  reducers: {
    setProfile(state, action: any) {
      state.profile = action.payload;
    },
  },
});

export const profileSettingsActions = profileSettingsSlice.actions;

export default profileSettingsSlice.reducer;

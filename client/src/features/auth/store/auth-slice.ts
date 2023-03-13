import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type authorisedConfig = {
  authorised: boolean;
  token: string;
};

const defaultAuthorisedConfig = {
  authorised: false,
  token: "",
};

const authState = {
  authorisedConfig: defaultAuthorisedConfig,
};

const authSlice = createSlice({
  name: "auth",
  initialState: authState,
  reducers: {
    setAuthorisedConfig(state, action: PayloadAction<authorisedConfig>) {
      state.authorisedConfig = action.payload;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const disabledDefault = {
  sidebar: false,
  home: false,
  search: false,
  newRecipe: false,
  sound: false,
  profile: false,
};

const headerSidebarState = {
  disabledComponents: disabledDefault,
};

const headerSidebarSlice = createSlice({
  name: "headerSidebar",
  initialState: headerSidebarState,
  reducers: {
    setNewReceipeDisabled(state) {
      state.disabledComponents = {
        sidebar: true,
        home: true,
        search: true,
        newRecipe: true,
        sound: false,
        profile: false,
      };
    },
    resetDisabled(state) {
      state.disabledComponents = disabledDefault;
    },
  },
});

export const headerSidebarActions = headerSidebarSlice.actions;

export default headerSidebarSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import commonAppReducer from "common/store/common-app-slice";

const missStrawberryStore = configureStore({
  reducer: {
    commonApp: commonAppReducer,
  },
});

export default missStrawberryStore;

export type RootState = ReturnType<typeof missStrawberryStore.getState>;
export type AppDispatch = typeof missStrawberryStore.dispatch;

import {
  RESET_WINDOW_SETTINGS,
  OPEN_WINDOW_DEFAULT,
} from "../static/window-settings";
import { useContext } from "react";
import windowContextProvider from "../store/window-context";

const useWindowConfigActions = () => {
  const setWindowSettings: any = useContext(
    windowContextProvider
  ).windowConfigHandler;

  const resetWindowConfig = () => {
    setWindowSettings(RESET_WINDOW_SETTINGS);
  };

  const closeWindowDefault = () => {
    resetWindowConfig();
  };

  const openWindow = (windowId: string) => {
    setWindowSettings({
      ...OPEN_WINDOW_DEFAULT,
      windowId,
    });
  };

  const actions = { resetWindowConfig, closeWindowDefault, openWindow };

  return actions;
};

export default useWindowConfigActions;

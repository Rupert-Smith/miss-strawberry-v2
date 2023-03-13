import { createContext, useState } from "react";
import { RESET_POPUP_SETTINGS } from "../static/popup-settings";

const PopupContext = createContext({
  popupConfig: {},
  popupConfigHandler: () => {},
});

export const PopupContextProvider = (props) => {
  const [popupConfig, setPopupConfig] = useState(RESET_POPUP_SETTINGS);

  const popupConfigHandler = (updatedPopupConfig) => {
    setPopupConfig(updatedPopupConfig);
  };
  return (
    <PopupContext.Provider value={{ popupConfig, popupConfigHandler }}>
      {props.children}
    </PopupContext.Provider>
  );
};

export default PopupContext;

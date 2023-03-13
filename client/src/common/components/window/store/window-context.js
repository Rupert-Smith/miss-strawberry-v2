import { createContext, useState } from "react";
import { RESET_WINDOW_SETTINGS } from "../static/window-settings";

const WindowContext = createContext({
  windowConfig: {},
  windowConfigHandler: () => {},
});

export const WindowContextProvider = (props) => {
  const [windowConfig, setWindowConfig] = useState(RESET_WINDOW_SETTINGS);

  const windowConfigHandler = (updatedWindowConfig) => {
    setWindowConfig(updatedWindowConfig);
  };
  return (
    <WindowContext.Provider value={{ windowConfig, windowConfigHandler }}>
      {props.children}
    </WindowContext.Provider>
  );
};

export default WindowContext;

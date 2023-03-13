import ReactDOM from "react-dom/client";
import "./index.css";
import MissStrawberryApp from "./miss-strawberry-app";
import { Provider } from "react-redux";
import missStrawberryStore from "store";
import { PopupContextProvider } from "common/popup/store/popup-context";
import { WindowContextProvider } from "common/components/window/store/window-context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={missStrawberryStore}>
    <PopupContextProvider>
      <WindowContextProvider>
        <MissStrawberryApp />
      </WindowContextProvider>
    </PopupContextProvider>
  </Provider>
);

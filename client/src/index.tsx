import ReactDOM from "react-dom/client";
import "./index.css";
import MissStrawberryApp from "./miss-strawberry-app";
import { Provider } from "react-redux";
import missStrawberryStore from "store";
import { PopupContextProvider } from "common/popup/store/popup-context";
import { WindowContextProvider } from "common/components/window/store/window-context";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={missStrawberryStore}>
    <PopupContextProvider>
      <WindowContextProvider>
        <PersistGate loading={null} persistor={persistor}>
          <MissStrawberryApp />
        </PersistGate>
      </WindowContextProvider>
    </PopupContextProvider>
  </Provider>
);

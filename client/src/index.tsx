import ReactDOM from "react-dom/client";
import "./index.css";
import MissStrawberryApp from "./miss-strawberry-app";
import { Provider } from "react-redux";
import missStrawberryStore from "store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={missStrawberryStore}>
    <MissStrawberryApp />
  </Provider>
);

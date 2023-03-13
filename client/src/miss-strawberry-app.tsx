import AppRoutes from "./routes/app-routes";
import { PopupManager } from "common/popup/popup-manager";
import { WindowManager } from "common/components/window/window-manger";
import PopupContextProvider from "common/popup/store/popup-context";
import WindowContextProvider from "common/components/window/store/window-context";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store";

function MissStrawberryApp() {
  const popupConfig: any = useContext(PopupContextProvider).popupConfig;
  const windowConfig: any = useContext(WindowContextProvider).windowConfig;
  const audioConfig = useSelector(
    (state: RootState) => state.audio.audioConfig
  );

  return (
    <>
      {popupConfig.display && <PopupManager />}
      {windowConfig.display && <WindowManager />}
      {audioConfig.play && <audio loop src={audioConfig.audio} autoPlay />}
      <AppRoutes />
    </>
  );
}

export default MissStrawberryApp;

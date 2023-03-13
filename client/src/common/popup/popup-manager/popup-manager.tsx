import { useContext } from "react";
import styles from "./_popup-manager.module.scss";
import { StandardPopup } from "common/popup/popups/standard-popup";
import { LoadingPopup } from "../popups/loading-popup";
import reactDom from "react-dom";
import { Backdrop } from "common/components/backdrops/backdrop";
import PopupContextProvider from "../store/popup-context";

function PopupManager() {
  const popupConfig: any = useContext(PopupContextProvider).popupConfig;

  let popup = <></>;
  const { cross, popupMessage, backdrop, popupId, actions, popupTitle }: any =
    popupConfig;

  if (popupId === "") {
    console.error("Popup id is empty");
  }
  let standardPopupConfig = {
    popupMessage,
    popupId,
    actions,
    popupTitle,
    cross,
  };

  switch (popupConfig.popupId) {
    case "warning":
    case "error":
    case "success":
    case "information":
      popup = <StandardPopup popupConfig={standardPopupConfig} />;
      break;
    case "loading":
      popup = <LoadingPopup />;
      break;
  }

  const portalElement = document.getElementById("popup-overlay")!;

  const popupBundle = (
    <div className={`${styles["master-wrapper"]}`}>
      {backdrop.activated && <Backdrop blur={backdrop.blur} />}
      <div className={`${styles["popup-wrapper"]}`}>{popup}</div>
    </div>
  );

  const exportComponent = reactDom.createPortal(popupBundle, portalElement);

  return exportComponent;
}

export { PopupManager };

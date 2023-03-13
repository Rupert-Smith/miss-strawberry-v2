import styles from "./_standard-popup.module.scss";
import { ReactComponent as InformationIcon } from "assets/icons/circle-info-light.svg";
import { ReactComponent as WarningIcon } from "assets/icons/triangle-exclamation-light.svg";
import { ReactComponent as ErrorIcon } from "assets/icons/circle-xmark-light.svg";
import { ReactComponent as SuccessIcon } from "assets/icons/circle-check-light.svg";
import {
  Popup,
  PopupHead,
  PopupBody,
  PopupMessage,
  PopupButtonBlock,
} from "../ui/popup-template";
import { TypeActions } from "common/types/action-types";

type StandardPopupProps = {
  popupConfig: {
    popupMessage?: string;
    popupId?: string;
    popupTitle?: string;
    actions?: TypeActions[];
    cross: boolean;
  };
  propsClassName?: string;
};

function StandardPopup({ propsClassName, popupConfig }: StandardPopupProps) {
  let popupTitle = "";
  let headerClass = "default";
  let icon = <WarningIcon />;

  switch (popupConfig.popupId) {
    case "warning":
      popupTitle = popupConfig.popupTitle || "warning";
      headerClass = "warning";
      icon = <WarningIcon />;
      break;
    case "information":
      popupTitle = popupConfig.popupTitle || "information";
      headerClass = "information";
      icon = <InformationIcon />;
      break;
    case "success":
      popupTitle = popupConfig.popupTitle || "success";
      headerClass = "success";
      icon = <SuccessIcon />;
      break;
    case "error":
      popupTitle = popupConfig.popupTitle || "error";
      headerClass = "error";
      icon = <ErrorIcon />;
      break;
  }

  return (
    <Popup propsClassName={`${styles["popup-container"]} ${propsClassName}`}>
      <PopupHead
        propsClassName={`${styles[headerClass]}`}
        propsHeaderText={popupTitle}
        propsIcon={icon}
        closeButton={popupConfig.cross}
      />
      <PopupBody>
        <PopupMessage propsMessage={popupConfig.popupMessage ?? ""} />
        <PopupButtonBlock propsActions={popupConfig.actions} />
      </PopupBody>
    </Popup>
  );
}

export { StandardPopup };

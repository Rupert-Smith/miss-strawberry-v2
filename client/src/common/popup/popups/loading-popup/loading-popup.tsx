import styles from "./_loading-popup.module.scss";
import { ReactComponent as LoadingIcon } from "assets/icons/spinner-light.svg";
import { Popup, PopupHead, PopupBody } from "../ui/popup-template";
import ReactLoading from "react-loading";
import variables from "assets/theme/_constants.module.scss";

function LoadingPopup() {
  return (
    <Popup>
      <PopupHead
        propsClassName={`${styles["loading"]}`}
        propsHeaderText={"loading"}
        propsIcon={<LoadingIcon />}
        closeButton={false}
      />
      <PopupBody>
        <div className={`${styles["loading-bubbles"]}`}>
          <ReactLoading
            type={"spinningBubbles"}
            color={variables.skyBlue}
            height={"10%"}
            width={"10%"}
          />
        </div>
      </PopupBody>
    </Popup>
  );
}

export { LoadingPopup };

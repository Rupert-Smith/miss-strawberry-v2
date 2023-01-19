import React, { ReactNode, MouseEventHandler } from "react";
import styles from "./_square-button.module.scss";
import variables from "assets/theme/_constants.module.scss";

type actionButtonType = {
  buttonText: string;
  customButtonColor?: string;
  customButtonTextColor?: string;
  propsClassName?: ReactNode;
  propsOnClick: MouseEventHandler;
};

export function SquareButton({
  buttonText,
  propsOnClick,
  customButtonColor,
  propsClassName,
  customButtonTextColor,
}: actionButtonType) {
  const buttonColor = customButtonColor
    ? customButtonColor
    : variables.bubblegumPink;
  const buttonTextColor = customButtonColor ? customButtonColor : "white";

  return (
    <div
      onClick={propsOnClick}
      style={{
        backgroundColor: buttonColor,
        color: buttonTextColor,
      }}
      className={`${propsClassName} ${styles["button"]}`}
    >
      {buttonText}
    </div>
  );
}

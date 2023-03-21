import React, { ReactNode, MouseEventHandler } from "react";
import styles from "./_square-button.module.scss";
import variables from "assets/theme/_constants.module.scss";

type actionButtonType = {
  buttonText: string;
  customButtonColor?: string;
  customButtonTextColor?: string;
  propsClassName?: ReactNode;
  propsOnClick?: Function;
  disabled?: boolean;
};

export function SquareButton({
  buttonText,
  propsOnClick,
  customButtonColor,
  propsClassName,
  customButtonTextColor,
  disabled,
}: actionButtonType) {
  const buttonColor = customButtonColor
    ? customButtonColor
    : variables.bubblegumPink;
  const buttonTextColor = customButtonColor ? customButtonColor : "white";

  return (
    <button
      disabled={disabled}
      onClick={() => {
        if (propsOnClick) {
          propsOnClick();
        }
      }}
      style={
        disabled
          ? {
              backgroundColor: variables.disabledLight,
              color: variables.disabledDark,
            }
          : {
              backgroundColor: buttonColor,
              color: buttonTextColor,
            }
      }
      className={`${
        disabled ? styles["disabled"] : styles["not-disabled"]
      } ${propsClassName} ${styles["button"]}`}
    >
      {buttonText}
    </button>
  );
}

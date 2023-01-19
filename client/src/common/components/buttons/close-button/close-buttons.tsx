import React, { ReactNode, MouseEventHandler } from "react";
import styles from "./_close-button.module.scss";
import { ReactComponent as CloseIcon } from "assets/icons/xmark-solid.svg";

type actionButtonType = {
  onMouseEnter?: any;
  onMouseLeave?: any;
  propsClassName?: ReactNode;
  black?: boolean;
  propsOnClick: MouseEventHandler;
};

export function CloseButton({
  propsOnClick,
  onMouseEnter,
  onMouseLeave,
  black,
  propsClassName,
}: actionButtonType) {
  return (
    <CloseIcon
      onClick={propsOnClick}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      className={`${propsClassName} ${styles["header-close-icon"]} ${
        black ? styles["black"] : styles["white"]
      }`}
    />
  );
}

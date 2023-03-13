import React, { ReactNode } from "react";
import styles from "./_default-user.module.scss";
import { ReactComponent as ChefIcon } from "assets/icons/user-chef-light.svg";

type propsStyleTypes = {
  propsContainerStyle?: {};
  propsIconStyle?: {};
  button?: Boolean;
};

export function DefaultUser({
  propsContainerStyle,
  propsIconStyle,
  button,
}: propsStyleTypes) {
  return (
    <div
      style={propsContainerStyle}
      className={`${styles["default-user"]} ${
        button ? styles["button"] : styles["picture"]
      }`}
    >
      <ChefIcon style={propsIconStyle} />
    </div>
  );
}

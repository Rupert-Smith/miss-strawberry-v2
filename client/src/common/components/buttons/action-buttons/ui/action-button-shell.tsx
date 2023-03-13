import React, { ReactNode } from "react";
import styles from "./_action-button-shell.module.scss";

type ActionButtonShellProps = {
  children?: ReactNode;
  className?: ReactNode;
  onMouseEnter?: any;
  onMouseLeave?: any;
  small?: boolean;
  propsOnClick: Function;
};

function ActionButtonShell({
  children,
  className,
  onMouseEnter,
  onMouseLeave,
  propsOnClick,
  small,
}: ActionButtonShellProps) {
  return (
    <div
      onClick={() => {
        propsOnClick();
      }}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      className={`${className} ${styles["action-button-shell"]} ${
        small ? styles["small-size"] : styles["default-size"]
      }`}
    >
      {children}
    </div>
  );
}

export { ActionButtonShell };

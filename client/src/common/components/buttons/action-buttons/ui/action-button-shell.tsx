import React, { ReactNode } from "react";
import styles from "./_action-button-shell.module.scss";

type Props = {
  children?: ReactNode;
  className?: ReactNode;
  onMouseEnter?: any;
  onMouseLeave?: any;
  small?: boolean;
};

function ActionButtonShell({
  children,
  className,
  onMouseEnter,
  onMouseLeave,
  small,
}: Props) {
  return (
    <div
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

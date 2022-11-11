import React, { ReactNode } from "react";
import styles from "./_action-button-shell.module.scss";

type Props = {
  children?: ReactNode;
  className?: ReactNode;
  onMouseEnter?: any;
  onMouseLeave?: any;
};

function ActionButtonShell({
  children,
  className,
  onMouseEnter,
  onMouseLeave,
}: Props) {
  return (
    <div
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      className={`${className} ${styles["action-button-shell"]}`}
    >
      {children}
    </div>
  );
}

export { ActionButtonShell };

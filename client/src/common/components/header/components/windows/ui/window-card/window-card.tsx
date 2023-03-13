import styles from "./_window-card.module.scss";
import { ReactNode } from "react";

type WindowCardTypes = {
  children?: ReactNode;
  propsClassName?: string;
  defaultColorOverride?: boolean;
  propsRef?: any;
};

function WindowCard({
  children,
  propsClassName,
  defaultColorOverride,
  propsRef,
}: WindowCardTypes) {
  return (
    <div
      ref={propsRef}
      className={`${propsClassName} ${styles["window-card"]} ${
        defaultColorOverride ? "" : styles["default-color"]
      }`}
    >
      {children}
    </div>
  );
}

export { WindowCard };

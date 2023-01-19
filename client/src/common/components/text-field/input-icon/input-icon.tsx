import React, { ReactNode } from "react";
import styles from "./_input-icon.module.scss";

type actionButtonType = {
  icon: ReactNode;
  inputConfig?: any;
  propsClassName?: ReactNode;
};

export function InputIcon({
  icon,
  inputConfig,
  propsClassName,
}: actionButtonType) {
  return (
    <div className={`${propsClassName} ${styles["input-icon"]}`}>
      {icon}
      <div />
      <div className={`${styles["line"]}`} />
      <input
        onChange={inputConfig.onChange}
        type={inputConfig.type}
        onBlur={inputConfig.onBlur}
        value={inputConfig.value}
        placeholder={inputConfig.placeholder}
      />
    </div>
  );
}

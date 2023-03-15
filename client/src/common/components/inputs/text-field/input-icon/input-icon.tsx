import React, { ReactNode } from "react";
import styles from "./_input-icon.module.scss";
import { InputErrorSideMessage } from "../../input-error-side-message";

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
    <div
      className={`${
        inputConfig.error.hasError && styles["input-wrapper-error"]
      } ${styles["input-wrapper"]}`}
    >
      <div className={`${propsClassName} ${styles["input-icon"]}`}>
        {icon}
        <div className={`${styles["line"]}`} />
        <input
          onChange={inputConfig.onChange}
          type={inputConfig.type}
          onBlur={inputConfig.onBlur}
          value={inputConfig.value}
          placeholder={inputConfig.placeholder}
        />
      </div>
      {inputConfig.error.hasError && (
        <InputErrorSideMessage
          marginLeft="21em"
          errorMessage={inputConfig.error.errorMessage}
        />
      )}
    </div>
  );
}

import React, { ReactNode } from "react";
import styles from "./_input-box-label.module.scss";

type InputBoxLabelType = {
  inputConfig: {
    labelText: string;
    placeholder: string;
    type: string;
    value: string;
    onChange: Function;
  };
  propsClassName?: ReactNode;
};

export function InputBoxLabel({
  inputConfig,
  propsClassName,
}: InputBoxLabelType) {
  return (
    <div className={`${propsClassName} ${styles["input-label"]}`}>
      <div
        className={`${styles["label-text"]}`}
      >{`${inputConfig.labelText}:`}</div>
      <input
        type={inputConfig.type}
        onChange={(event) => {
          inputConfig.onChange(event.target.value);
        }}
        placeholder={inputConfig.placeholder}
      />
    </div>
  );
}

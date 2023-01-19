import React, { ReactNode } from "react";
import styles from "./_input-label.module.scss";

type actionButtonType = {
  inputConfig: {
    labelText: string;
    placeholder: string;
    type: string;
    value: string;
    onChange: Function;
  };
  propsClassName?: ReactNode;
};

export function InputLabel({ inputConfig, propsClassName }: actionButtonType) {
  return (
    <div className={`${propsClassName} ${styles["input-label"]}`}>
      <div
        className={`${styles["label-text"]}`}
      >{`${inputConfig.labelText}:`}</div>
      <input
        onChange={(event) => {
          inputConfig.onChange(event.target.value);
        }}
        placeholder={inputConfig.placeholder}
      />
    </div>
  );
}

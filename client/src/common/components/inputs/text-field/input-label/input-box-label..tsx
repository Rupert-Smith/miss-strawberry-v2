import React, { ReactNode } from "react";
import styles from "./_input-box-label.module.scss";
import { InputErrorSideMessage } from "../../input-error-side-message";

type InputBoxLabelType = {
  inputConfig: {
    labelText: string;
    placeholder: string;
    type: string;
    value: string;
    onChange: Function;
    onBlur: Function;
    error: { errorMessage: string; hasError: boolean };
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
        onBlur={() => {
          inputConfig.onBlur();
        }}
        type={inputConfig.type}
        onChange={(event) => {
          inputConfig.onChange(event.target.value);
        }}
        placeholder={inputConfig.placeholder}
      />
      {inputConfig.error.hasError && (
        <InputErrorSideMessage
          marginLeft="22em"
          errorMessage={inputConfig.error.errorMessage}
        />
      )}
    </div>
  );
}

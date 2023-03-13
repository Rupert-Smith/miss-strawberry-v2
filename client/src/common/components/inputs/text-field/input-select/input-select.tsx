import React, { ReactNode } from "react";
import styles from "./_input-select.module.scss";
import "./input-select-mui.css";

type InputSelectType = {
  className: string;
  options: any;
  onChange: any;
  value?: any;
  placeholder?: string;
};

export function InputSelect({
  className,
  options,
  onChange,
  value,
  placeholder,
}: InputSelectType) {
  return (
    <div className={`${styles["select-wrapper"]}`}>
      <select
        className={`${className} ${styles["input-select"]}`}
        onChange={onChange}
        value={value}
      >
        {placeholder && (
          <option className={styles["placeholder"]} selected disabled value="">
            {placeholder}
          </option>
        )}
        {options.map((option: any) => {
          return <option value={option.value}>{option.label}</option>;
        })}
      </select>
    </div>
  );
}

import React, { ReactNode } from "react";
import styles from "./_input-number.module.scss";
import { TextField } from "@mui/material";

type InputNumberType = {};

export function InputNumber({}: InputNumberType) {
  return (
    <TextField
      className={styles["override-mui-styles-input"]}
      type="number"
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
}

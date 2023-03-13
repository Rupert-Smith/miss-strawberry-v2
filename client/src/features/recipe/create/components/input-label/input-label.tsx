import styles from "./_input-label.module.scss";

type InputLabelProps = {
  inputLabelConfig: any;
};

function InputLabel({ inputLabelConfig }: InputLabelProps) {
  const { inputComponent, label } = inputLabelConfig;

  return (
    <div className={styles["label-input-container"]}>
      <label>{label}:</label>
      {inputComponent}
    </div>
  );
}

export { InputLabel };

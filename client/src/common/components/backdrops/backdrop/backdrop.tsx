import styles from "./_backdrop.module.scss";

type BackdropTypes = {
  blur: boolean;
  clickBackdrop?: Function;
};

function Backdrop({ blur, clickBackdrop }: BackdropTypes) {
  return (
    <div
      onClick={() => {
        clickBackdrop && clickBackdrop();
      }}
      className={`${styles["backdrop"]} ${blur ? styles["blur"] : ""}`}
    />
  );
}

export { Backdrop };

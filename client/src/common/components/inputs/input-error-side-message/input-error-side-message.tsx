import styles from "./_input-error-side-message.module.scss";

type ErrorMessageTypes = {
  errorMessage: string;
  marginLeft: string;
};

export function InputErrorSideMessage({
  errorMessage,
  marginLeft,
}: ErrorMessageTypes) {
  return (
    <div style={{ marginLeft }} className={`${styles["error-message"]}`}>
      {errorMessage}
    </div>
  );
}

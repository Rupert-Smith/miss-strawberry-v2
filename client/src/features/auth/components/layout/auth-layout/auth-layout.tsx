import { ReactNode } from "react";
import styles from "./_auth-layout.module.scss";
import loginIcon from "assets/images/miss-strawberry/login.png";

type Props = {
  children?: ReactNode;
};

function AuthLayout({ children }: Props) {
  return (
    <div className={styles["auth-layout"]}>
      <div className={styles["main-content"]}>
        <img
          className={styles["miss-strawberry-image"]}
          src={loginIcon}
          alt="Miss Strawberry login cartoon"
        />
        {children}
      </div>
    </div>
  );
}

export { AuthLayout };

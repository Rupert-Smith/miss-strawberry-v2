import styles from "./_forgot-password.module.scss";
import { AuthLayout } from "../components/layout/auth-layout";
import { SquareButton } from "common/components/buttons/square-button";
import { InputLabel } from "common/components/text-field/input-label";
import { NavLinkNoUnderline } from "common/components/helper-components/nav-link-no-underline";

function ForgotPassword() {
  return (
    <AuthLayout>
      <div className={`${styles["login-block"]}`}>
        <div className={`${styles["forgot-password-title"]}`}>
          forgot password
        </div>
        <div className={`${styles["forgot-username-password"]}`}>
          enter your email to and we’ll send you a link to reset your password!
        </div>
        <div className={`${styles["blocks"]}`}>
          {/* <InputLabel
            labelText={"email address"}
            placeholderText={"example@gmail.com"}
          /> */}
          <SquareButton
            propsOnClick={() => {
              console.log("");
            }}
            buttonText="submit"
          />
        </div>
        <NavLinkNoUnderline to="/login">
          <div className={`${styles["back-to-login"]}`}>back to login</div>
        </NavLinkNoUnderline>
      </div>
    </AuthLayout>
  );
}

export { ForgotPassword };

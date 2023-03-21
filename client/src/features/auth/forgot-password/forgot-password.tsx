import styles from "./_forgot-password.module.scss";
import { AuthLayout } from "../components/layout/auth-layout";
import { SquareButton } from "common/components/buttons/square-button";
import { InputBoxLabel } from "common/components/inputs/text-field/input-label";
import { NavLinkNoUnderline } from "common/components/helper-components/nav-link-no-underline";
import { useState } from "react";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const emailConfig = {
    labelText: "email address",
    placeholder: "example@gmail.com",
    type: "text",
    value: email,
    onChange: (updatedUsername: string) => {
      setEmail(updatedUsername);
    },
  };

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
          {/* <InputBoxLabel inputConfig={emailConfig} /> */}
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

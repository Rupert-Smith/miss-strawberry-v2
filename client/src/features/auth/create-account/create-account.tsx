import { useState } from "react";
import styles from "./_create-account.module.scss";
import { AuthLayout } from "../components/layout/auth-layout";
import { SquareButton } from "common/components/buttons/square-button";
import { NavLinkNoUnderline } from "common/components/helper-components/nav-link-no-underline";
import { InputBoxLabel } from "common/components/inputs/text-field/input-label";
import useCreateAccount from "../hooks/useCreateAccount";

function CreateAccount() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [email, setEmail] = useState("");

  const { createAccount } = useCreateAccount();

  const usernameInputConfig = {
    labelText: "username",
    placeholder: "alice",
    type: "text",
    value: username,
    onChange: (updatedUsername: string) => {
      setUsername(updatedUsername);
    },
  };
  const passwordInputConfig = {
    labelText: "password",
    placeholder: "*********",
    type: "password",
    value: password,
    onChange: (updatedPassword: string) => {
      setPassword(updatedPassword);
    },
  };

  const passwordConfirmInputConfig = {
    labelText: "password confirm",
    placeholder: "*********",
    type: "password",
    value: passwordConfirm,
    onChange: (updatedPassword: string) => {
      setPasswordConfirm(updatedPassword);
    },
  };

  const createAccountConfig = {
    labelText: "email address",
    placeholder: "alice@example.com",
    type: "text",
    value: email,
    onChange: (updatedEmail: string) => {
      setEmail(updatedEmail);
    },
  };

  return (
    <AuthLayout>
      <div className={`${styles["form-block"]}`}>
        <InputBoxLabel inputConfig={usernameInputConfig} />
        <InputBoxLabel inputConfig={passwordInputConfig} />
        <InputBoxLabel inputConfig={passwordConfirmInputConfig} />
        <InputBoxLabel inputConfig={createAccountConfig} />
        <div className={`${styles["bottom-block"]}`}>
          <SquareButton
            propsOnClick={() => {
              createAccount({ username, password, passwordConfirm, email });
            }}
            buttonText="create account"
          />
          <NavLinkNoUnderline to={"/login"}>
            <div className={`${styles["cancel"]}`}>cancel</div>
          </NavLinkNoUnderline>
        </div>
      </div>
    </AuthLayout>
  );
}

export { CreateAccount };

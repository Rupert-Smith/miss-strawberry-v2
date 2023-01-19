import { useState } from "react";
import styles from "./_create-account.module.scss";
import { AuthLayout } from "../components/layout/auth-layout";
import { SquareButton } from "common/components/buttons/square-button";
import { NavLinkNoUnderline } from "common/components/helper-components/nav-link-no-underline";
import { InputLabel } from "common/components/text-field/input-label";
import { apiCall } from "utilities/api/api-call";

function CreateAccount() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleCreateAccount = async () => {
    await apiCall({
      url: "users/create-account",
      method: "POST",
      body: { username, password, email },
    });
  };

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
    placeholder: "passw0rd*",
    type: "text",
    value: password,
    onChange: (updatedPassword: string) => {
      setPassword(updatedPassword);
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
      <div className={`${styles["login-block"]}`}>
        <InputLabel inputConfig={usernameInputConfig} />
        <InputLabel inputConfig={passwordInputConfig} />
        <InputLabel inputConfig={createAccountConfig} />
        <div className={`${styles["bottom-block"]}`}>
          <SquareButton
            propsOnClick={() => {
              handleCreateAccount();
            }}
            buttonText="create account"
          />
          <NavLinkNoUnderline to={"login"}>
            <div className={`${styles["cancel"]}`}>cancel</div>
          </NavLinkNoUnderline>
        </div>
      </div>
    </AuthLayout>
  );
}

export { CreateAccount };

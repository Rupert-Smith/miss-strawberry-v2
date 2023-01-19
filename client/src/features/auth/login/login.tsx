import styles from "./_login.module.scss";
import { useState } from "react";
import { AuthLayout } from "../components/layout/auth-layout";
import { SquareButton } from "common/components/buttons/square-button";
import { InputIcon } from "common/components/text-field/input-icon";
import { ReactComponent as UsernameIcon } from "assets/icons/circle-user-solid.svg";
import { ReactComponent as PasswordIcon } from "assets/icons/lock-solid.svg";
import { NavLinkNoUnderline } from "common/components/helper-components/nav-link-no-underline";
import { apiCall } from "utilities/api/api-call";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    console.log(username, password);
    await apiCall({
      url: "./login",
      method: "POST",
      body: { username, password },
    });
  };

  const usernameInputConfig = {
    placeholder: "username",
    type: "text",
    value: username,
    onChange: (event: any) => {
      setUsername(event.target.value);
    },
  };
  const passwordInputConfig = {
    placeholder: "password",
    type: "text",
    value: password,
    onChange: (event: any) => {
      setPassword(event.target.value);
    },
  };

  return (
    <AuthLayout>
      <div className={`${styles["login-block"]}`}>
        <InputIcon icon={<UsernameIcon />} inputConfig={usernameInputConfig} />
        <InputIcon icon={<PasswordIcon />} inputConfig={passwordInputConfig} />
        <NavLinkNoUnderline to="/forgot-password">
          <div className={`${styles["forgot-password"]}`}>
            forgot your password?
          </div>
        </NavLinkNoUnderline>
        <SquareButton
          propsOnClick={() => {
            handleLogin();
          }}
          buttonText="log in"
        />
        <NavLinkNoUnderline to="/create-account">
          <div className={`${styles["create-an-account"]}`}>
            create an account
          </div>
        </NavLinkNoUnderline>
      </div>
    </AuthLayout>
  );
}

export { Login };

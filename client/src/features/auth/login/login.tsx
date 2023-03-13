import styles from "./_login.module.scss";
import { useState } from "react";
import { AuthLayout } from "../components/layout/auth-layout";
import { SquareButton } from "common/components/buttons/square-button";
import { InputIcon } from "common/components/inputs/text-field/input-icon";
import { ReactComponent as UsernameIcon } from "assets/icons/circle-user-solid.svg";
import { ReactComponent as PasswordIcon } from "assets/icons/lock-solid.svg";
import { NavLinkNoUnderline } from "common/components/helper-components/nav-link-no-underline";
import useHandleLogin from "./hooks/use-handle-login";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { handleLogin } = useHandleLogin(username, password);

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
    type: "password",
    value: password,
    onChange: (event: any) => {
      setPassword(event.target.value);
    },
  };

  return (
    <>
      <AuthLayout>
        <form
          onSubmit={(e) => {
            handleLogin(e);
          }}
          className={`${styles["login-block"]}`}
        >
          <InputIcon
            icon={<UsernameIcon />}
            inputConfig={usernameInputConfig}
          />
          <InputIcon
            icon={<PasswordIcon />}
            inputConfig={passwordInputConfig}
          />
          {/* <NavLinkNoUnderline to="/forgot-password">
            <div className={`${styles["forgot-password"]}`}>
              forgot your password?
            </div>
          </NavLinkNoUnderline> */}
          <SquareButton buttonText="log in" />
          <NavLinkNoUnderline to="/create-account">
            <div className={`${styles["create-an-account"]}`}>
              create an account
            </div>
          </NavLinkNoUnderline>
        </form>
      </AuthLayout>
    </>
  );
}

export { Login };

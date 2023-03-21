import styles from "./_create-account.module.scss";
import { AuthLayout } from "../components/layout/auth-layout";
import { SquareButton } from "common/components/buttons/square-button";
import { NavLinkNoUnderline } from "common/components/helper-components/nav-link-no-underline";
import { InputBoxLabel } from "common/components/inputs/text-field/input-label";
import useCreateAccount from "./hooks/use-create-account";
import useCreateAccountInputData from "./hooks/use-create-account-input-data";

function CreateAccount() {
  const { createAccount } = useCreateAccount();

  const {
    usernameInputConfig,
    passwordInputConfig,
    passwordConfirmInputConfig,
    emailConfig,
    disabled,
  } = useCreateAccountInputData();

  return (
    <AuthLayout>
      <div className={`${styles["form-block"]}`}>
        <InputBoxLabel inputConfig={usernameInputConfig} />
        <InputBoxLabel inputConfig={passwordInputConfig} />
        <InputBoxLabel inputConfig={passwordConfirmInputConfig} />
        <InputBoxLabel inputConfig={emailConfig} />
        <div className={`${styles["bottom-block"]}`}>
          <SquareButton
            disabled={disabled}
            propsOnClick={() => {
              createAccount({
                username: usernameInputConfig.value,
                password: passwordInputConfig.value,
                passwordConfirm: passwordConfirmInputConfig.value,
                email: emailConfig.value,
              });
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

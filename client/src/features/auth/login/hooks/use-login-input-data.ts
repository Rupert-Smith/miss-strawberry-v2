import useInput from "features/auth/hooks/use-input";
import { isEmpty } from "common/helpers/auth-checkers";
import { useEffect, useState } from "react";

export default function useLoginInputData() {
  const [disabled, setDisabled] = useState(true);

  function checkUsername(value: string) {
    let message = "";
    let valueIsValid = true;

    if (isEmpty(value)) {
      message = "please enter a username";
      valueIsValid = false;
    }

    return { valueIsValid, message };
  }

  function checkPassword(value: string) {
    let message = "";
    let valueIsValid = true;

    if (isEmpty(value)) {
      message = "please enter a password";
      valueIsValid = false;
    }

    return { valueIsValid, message };
  }

  const {
    value: usernameValue,
    hasError: usernameError,
    isTouched: usernameIsTouched,
    valueChangeHandler: usernameChangeHandler,
    inputBlurHandler: usernameBlurHandler,
  } = useInput(checkUsername);
  const {
    value: passwordValue,
    hasError: passwordError,
    isTouched: passwordIsTouched,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
  } = useInput(checkPassword);

  const usernameInputConfig: any = {
    placeholder: "username",
    type: "text",
    value: usernameValue,
    error: usernameError,
    onBlur: usernameBlurHandler,
    onChange: (event: any) => {
      usernameChangeHandler(event.target.value);
    },
  };
  const passwordInputConfig: any = {
    placeholder: "password",
    type: "password",
    error: passwordError,
    value: passwordValue,
    onBlur: passwordBlurHandler,
    onChange: (event: any) => {
      passwordChangeHandler(event.target.value);
    },
  };

  // we want the login button to START disabled
  useEffect(() => {
    if (!usernameIsTouched && !passwordIsTouched) {
      return;
    }
    if (passwordError.hasError || usernameError.hasError) {
      setDisabled(true);
    }
    if (!passwordError.hasError && !usernameError.hasError) {
      setDisabled(false);
    }
  }, [passwordError, usernameError, usernameIsTouched, passwordIsTouched]);

  return { usernameInputConfig, passwordInputConfig, disabled };
}

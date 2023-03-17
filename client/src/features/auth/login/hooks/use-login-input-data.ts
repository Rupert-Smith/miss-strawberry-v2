import useInput from "features/auth/hooks/use-input";
import { isEmpty } from "common/helpers/validators";
import { useEffect, useState } from "react";
import { inputConfigType } from "features/auth/types/input-types";

type useLoginInputDataReturn = {
  usernameInputConfig: inputConfigType;
  passwordInputConfig: inputConfigType;
  disabled: boolean;
};

export default function useLoginInputData(): useLoginInputDataReturn {
  const [disabled, setDisabled] = useState(true);

  function checkUsername(value: string) {
    let message = "";
    let valueIsValid = false;

    if (!isEmpty(value)) {
      valueIsValid = true;
    } else {
      message = "please enter a username";
    }

    return { valueIsValid, message };
  }

  function checkPassword(value: string) {
    let message = "";
    let valueIsValid = false;

    if (!isEmpty(value)) {
      valueIsValid = true;
    } else {
      message = "please enter a password";
    }

    return { valueIsValid, message };
  }

  const {
    value: usernameValue,
    error: usernameError,
    isTouched: usernameIsTouched,
    valueChangeHandler: usernameChangeHandler,
    inputBlurHandler: usernameBlurHandler,
  } = useInput(checkUsername);

  const {
    value: passwordValue,
    error: passwordError,
    isTouched: passwordIsTouched,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
  } = useInput(checkPassword);

  const usernameInputConfig: inputConfigType = {
    placeholder: "username",
    type: "text",
    value: usernameValue,
    error: usernameError,
    onBlur: usernameBlurHandler,
    onChange: (event: any) => {
      usernameChangeHandler(event.target.value);
    },
  };

  const passwordInputConfig: inputConfigType = {
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

import useInput from "features/auth/hooks/use-input";
import { isEmpty } from "common/helpers/auth-checkers";
import { useEffect, useState } from "react";

export default function useCreateAccountInputData() {
  const [disabled, setDisabled] = useState(true);

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

  const {
    value: passwordConfirmValue,
    hasError: passwordConfirmError,
    isTouched: passwordConfirmIsTouched,
    valueChangeHandler: passwordConfirmChangeHandler,
    inputBlurHandler: passwordConfirmBlurHandler,
  } = useInput(checkPasswordConfirm);

  const {
    value: emailValue,
    hasError: emailError,
    isTouched: emailIsTouched,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput(checkEmailAddress);

  function checkUsername(value: string) {
    if (isEmpty(value))
      return {
        message: "please enter a username",
        valueIsValid: false,
      };

    return { valueIsValid: true, message: "" };
  }

  function checkPassword(value: string) {
    if (isEmpty(value))
      return {
        message: "please enter a password",
        valueIsValid: false,
      };
    if (value.length < 8) {
      return {
        message: "please make sure password is 8 characters long",
        valueIsValid: false,
      };
    }

    return { valueIsValid: true, message: "" };
  }

  function checkPasswordConfirm(value: string) {
    if (isEmpty(value))
      return {
        message: "please confirm password",
        valueIsValid: false,
      };
    if (value.length < 8) {
      return {
        message: "please make sure password is 8 characters long",
        valueIsValid: false,
      };
    }

    return { valueIsValid: true, message: "" };
  }

  function checkEmailAddress(value: string) {
    if (isEmpty(value))
      return {
        message: "please enter an email address",
        valueIsValid: false,
      };
    const validate: any = /^\S+@\S+$/;
    if (!validate.test(value)) {
      return {
        message: "please enter a valid email address",
        valueIsValid: false,
      };
    }
    return { valueIsValid: true, message: "" };
  }

  const usernameInputConfig: any = {
    labelText: "username",
    placeholder: "alice",
    type: "text",
    error: usernameError,
    value: usernameValue,
    onBlur: usernameBlurHandler,
    onChange: (updatedUsername: string) => {
      usernameChangeHandler(updatedUsername);
    },
  };
  const passwordInputConfig: any = {
    labelText: "password",
    placeholder: "*********",
    type: "password",
    value: passwordValue,
    error: passwordError,
    onBlur: passwordBlurHandler,
    onChange: (updatedPassword: string) => {
      passwordChangeHandler(updatedPassword);
    },
  };

  const passwordConfirmInputConfig: any = {
    labelText: "password confirm",
    placeholder: "*********",
    type: "password",
    value: passwordConfirmValue,
    error: passwordConfirmError,
    onBlur: passwordConfirmBlurHandler,
    onChange: (updatedPassword: string) => {
      passwordConfirmChangeHandler(updatedPassword);
    },
  };

  const emailConfig: any = {
    labelText: "email address",
    placeholder: "alice@example.com",
    type: "email",
    value: emailValue,
    error: emailError,
    onBlur: emailBlurHandler,
    onChange: (updatedEmail: string) => {
      emailChangeHandler(updatedEmail);
    },
  };

  // we want the login button to START disabled
  useEffect(() => {
    if (
      !usernameIsTouched ||
      !passwordIsTouched ||
      !passwordConfirmIsTouched ||
      !emailIsTouched
    ) {
      return;
    }
    if (
      passwordError.hasError ||
      usernameError.hasError ||
      passwordConfirmError.hasError ||
      emailError.hasError
    ) {
      setDisabled(true);
    }
    if (!passwordError.hasError && !usernameError.hasError) {
      setDisabled(false);
    }
  }, [
    passwordError,
    usernameError,
    usernameIsTouched,
    passwordIsTouched,
    passwordConfirmIsTouched,
    emailIsTouched,
    passwordConfirmError,
    emailError,
  ]);

  return {
    usernameInputConfig,
    passwordInputConfig,
    passwordConfirmInputConfig,
    emailConfig,
    disabled,
  };
}

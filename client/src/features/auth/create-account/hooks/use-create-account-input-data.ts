import useInput from "features/auth/hooks/use-input";
import { isEmpty } from "common/helpers/validators";
import { useEffect, useState } from "react";
import { inputConfigTypeLabel } from "features/auth/types/input-types";

export default function useCreateAccountInputData() {
  const [disabled, setDisabled] = useState(true);

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

  const {
    value: passwordConfirmValue,
    error: passwordConfirmError,
    isTouched: passwordConfirmIsTouched,
    valueChangeHandler: passwordConfirmChangeHandler,
    inputBlurHandler: passwordConfirmBlurHandler,
  } = useInput(checkPasswordConfirm);

  const {
    value: emailValue,
    error: emailError,
    isTouched: emailIsTouched,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput(checkEmailAddress);

  type checkInput = {
    message: string;
    valueIsValid: boolean;
  };

  function checkUsername(value: string): checkInput {
    if (isEmpty(value))
      return {
        message: "please enter a username",
        valueIsValid: false,
      };

    return { valueIsValid: true, message: "" };
  }

  function checkPassword(value: string): checkInput {
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

  function checkPasswordConfirm(value: string): checkInput {
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

  function checkEmailAddress(value: string): checkInput {
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

  const usernameInputConfig: inputConfigTypeLabel = {
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
  const passwordInputConfig: inputConfigTypeLabel = {
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

  const passwordConfirmInputConfig: inputConfigTypeLabel = {
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

  const emailConfig: inputConfigTypeLabel = {
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

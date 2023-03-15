import { useReducer, useEffect } from "react";

const initialInputState = { value: "", isTouched: false };

const inputStateReducer = (
  state: { isTouched: boolean; value: string },
  action: { value: string; type: string }
) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { isTouched: true, value: state.value };
  } else {
    return state;
  }
};

const useInput = (validateValue: Function) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const validConfig = validateValue(inputState.value);

  let hasError =
    !validConfig.valueIsValid && inputState.isTouched
      ? { hasError: true, errorMessage: validConfig.message }
      : { hasError: false, errorMessage: "" };

  const valueChangeHandler = (value: string) => {
    dispatch({ type: "INPUT", value });
  };

  const inputBlurHandler = (value: string) => {
    dispatch({ type: "BLUR", value });
  };

  return {
    value: inputState.value,
    isTouched: inputState.isTouched,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
  };
};

export default useInput;

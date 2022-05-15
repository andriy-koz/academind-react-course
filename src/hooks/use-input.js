import { useReducer } from 'react';

const initialState = { value: '', isTouched: false };

const inputStateReducer = (state, action) => {
  if (action.type === 'INPUT') {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === 'BLUR') {
    return { value: state.value, isTouched: true };
  }
  if (action.type === 'RESET') {
    return { value: '', isTouched: false };
  }
  return inputStateReducer;
};

const useInput = validateValue => {
  const [state, dispatch] = useReducer(inputStateReducer, initialState);

  const valueIsValid = validateValue(state.value);
  const hasError = !valueIsValid && state.isTouched;

  const valueChangeHandler = event => {
    dispatch({ type: 'INPUT', value: event.target.value });
  };
  const inputBlurHandler = () => {
    dispatch({ type: 'BLUR' });
  };
  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return {
    value: state.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;

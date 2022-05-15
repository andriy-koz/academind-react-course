import { useState } from 'react';

const useInputPractice = valueValidation => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = valueValidation(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = event => {
    setEnteredValue(event.target.value);
  };
  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    valueIsValid,
    hasError,
    changeHandler: valueChangeHandler,
    blurHandler: inputBlurHandler,
    reset,
  };
};

export default useInputPractice;

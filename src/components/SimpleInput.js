// Dealing with form submission and user input
// Ways of getting user input:
//  1. useRef -> Get the value on submitting
//  2. useState -> Get the value on every key stroke and update state

import { useState, useEffect } from 'react';

const SimpleInput = props => {
  // useState: initialize
  const [enteredName, setEneteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  useEffect(() => {
    if (enteredNameIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [enteredNameIsValid]);

  // Function to update state on input change, for useState aproach
  const nameInputChangeHandler = event => {
    setEneteredName(event.target.value);
  };

  // Handles states when the input lost focus
  const nameInputBlurHandler = event => {
    setEnteredNameTouched(true);
  };

  // Function to get the entered value on submission, used for both aproaches
  const formSubmissionHandler = event => {
    event.preventDefault();
    // Setting touched to true, because we assume that on submission every form input was touched
    setEnteredNameTouched(true);
    // Form Validation: if !valid trigger validation state and return
    if (!enteredNameIsValid) {
      return;
    }
    // useState: just get the current enteredName value
    console.log(enteredName);
    setEneteredName('');
    setEnteredNameTouched(false);
  };

  // Validation: adding dynamic class names to form
  const nameInputClasses = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          value={enteredName}
          // Pointer to state handler on every key stroke
          onChange={nameInputChangeHandler}
          // Built-in property wich allows to react when the user clicked outside of the input, and it lost its focus
          onBlur={nameInputBlurHandler}
        />
        {/* From validation: provide user feedback based on validation state */}
        {nameInputIsInvalid && (
          <p className='error-text'>Name must not be empty.</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

// Dealing with form submission and user input
// Ways of getting user input:
//  1. useRef -> Get the value on submitting
//  2. useState -> Get the value on every key stroke and update state

import { useRef, useState, useEffect } from 'react';

const SimpleInput = props => {
  // useRef: initialize hook
  const nameInputRef = useRef();
  // useState: initialize
  const [enteredName, setEneteredName] = useState('');
  // State to provide user feedback on validation
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  // Set enteredNameIsValid to false, and add a 'touched' state
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  // Adding use effect to log when entered name is changed and is valid
  useEffect(() => {
    if (enteredNameIsValid) {
      console.log('Name Input is valid!');
    }
  }, [enteredNameIsValid]);

  // Function to update state on input change, for useState aproach
  const nameInputChangeHandler = event => {
    setEneteredName(event.target.value);
  };

  // Function to get the entered value on submission, used for both aproaches
  const formSubmissionHandler = event => {
    event.preventDefault();
    // Setting touched to true, because we assume that on submission every form input was touched
    setEnteredNameTouched(true);
    // Form Validation: if !valid trigger validation state and return
    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }
    // Form Validation: test passed, set state to true
    setEnteredNameIsValid(true);
    // useState: just get the current enteredName value
    console.log(enteredName);
    // useRef: store the value from nameInputRef into a variable
    // All ref objects has the 'current' property which holds the elements 'value'
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);
  };

  // Adding a boolean to include touched state in validation, this practice prevents posible unwanted behaiviors
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  // Validation: adding dynamic class names to form
  const nameInputClasses = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          // Link to previusly initialized ref hook via the 'ref' property available on every HTML element
          ref={nameInputRef}
          type='text'
          id='name'
          // Pointer to state handler on every key stroke
          onChange={nameInputChangeHandler}
        />
        {/* From validation: provide user feedback based on validation state */}
        {nameInputIsInvalid && (
          <p className='error-text'>Name must not be empty.</p>
        )}
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

// Dealing with form submission and user input
// Ways of getting user input:
//  1. useRef -> Get the value on submitting
//  2. useState -> Get the value on every key stroke and update state

import { useRef, useState } from 'react';

const SimpleInput = props => {
  // useRef: initialize hook
  const nameInputRef = useRef();
  // useState: initialize
  const [enteredName, setEneteredName] = useState('');

  // Function to update state on input change, for useState aproach
  const nameInputChangeHandler = event => {
    setEneteredName(event.target.value);
  };

  // Function to get the entered value on submission, used for both aproaches
  const formSubmissionHandler = event => {
    event.preventDefault();
    // useState: just get the current enteredName value
    console.log(enteredName);
    // useRef: store the value from nameInputRef into a variable
    // All ref objects has the 'current' property which holds the elements 'value'
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input
          // Link to previusly initialized ref hook via the 'ref' property available on every HTML element
          ref={nameInputRef}
          type='text'
          id='name'
          // Pointer to state handler on every key stroke
          onChange={nameInputChangeHandler}
        />
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

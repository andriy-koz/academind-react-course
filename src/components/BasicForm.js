import useInputPractice from '../hooks/use-input-practice';

const BasicForm = () => {
  const {
    value: nameValue,
    valueIsValid: nameIsValid,
    hasError: nameHasError,
    changeHandler: nameChangeHandler,
    blurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInputPractice(value => value !== '');

  const {
    value: lastNameValue,
    valueIsValid: lastNameIsValid,
    hasError: lastNameHasError,
    changeHandler: lastNameChangeHandler,
    blurHandler: lastNameBlurHandler,
    reset: lastNameReset,
  } = useInputPractice(value => value !== '');

  const {
    value: emailValue,
    valueIsValid: emailIsValid,
    hasError: emailHasError,
    changeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInputPractice(value => /.*@.*\..+/.test(value));

  let formIsValid = nameIsValid && lastNameIsValid && emailIsValid;

  const formSubmissionHandler = event => {
    event.preventDefault();
    if (!formIsValid) return;
    console.log(nameValue, lastNameValue, emailValue);
    nameReset();
    lastNameReset();
    emailReset();
  };

  const errorMsg = msg => <p className='error-text'>{msg}</p>;

  const dynamicClasses = hasError =>
    hasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={dynamicClasses(nameHasError)}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            value={nameValue}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
          {nameHasError && errorMsg('Name must not be empty.')}
        </div>
        <div className={dynamicClasses(lastNameHasError)}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='name'
            value={lastNameValue}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && errorMsg('Last name must not be empty.')}
        </div>
      </div>
      <div className={dynamicClasses(emailHasError)}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          type='text'
          id='name'
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && errorMsg('Email must be valid.')}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

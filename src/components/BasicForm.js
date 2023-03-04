import useInput from "../hooks/use-input-remastered";

const BasicForm = (props) => {

    // Name
    const {inputIsValid: nameIsValid,
        enteredInput: enteredName,
        style: styleForName,
        inputHandler: nameInputHandler,
        inputBlurHandler: nameBlurHandler,
        reset: nameReset} = useInput(value => value.trim() !== '')

    //E-Mail
    const {inputIsValid: mailIsValid,
        enteredInput: enteredMail,
        style: styleForMail,
        inputHandler: mailInputHandler,
        inputBlurHandler: mailBlurHandler,
        reset: mailReset} = useInput(value => value.includes('@'))

    //Last Name
    const {inputIsValid: lastIsValid,
        enteredInput: enteredLast,
        style: styleForLast,
        inputHandler: lastInputHandler,
        inputBlurHandler: lastBlurHandler,
        reset: lastReset} = useInput(value => value.trim() !== '')

    //Form
    let isFormValid = false;

    if(nameIsValid && lastIsValid && mailIsValid) isFormValid = true;

    const submitFormHandler = (e) =>{
        e.preventDefault();

        if(!isFormValid)  //Important for security

        nameReset();
        mailReset();
        lastReset();
    }

    return (
    <form onSubmit={submitFormHandler}>
      <div className='control-group'>
        <div className={styleForName}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={enteredName} onChange={nameInputHandler} onBlur={nameBlurHandler}/>
        </div>
        <div className={styleForLast}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='last' value={enteredLast} onChange={lastInputHandler} onBlur={lastBlurHandler}/>
        </div>
      </div>
      <div className={styleForMail}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='email' id='mail' value={enteredMail} onChange={mailInputHandler} onBlur={mailBlurHandler}/>
      </div>
      <div className='form-actions'>
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

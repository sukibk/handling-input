import { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {

    let formIsValid = false;

    const{enteredInput: nameValidity, value: inputName, hasError: hasErrorName, inputHandler: handleNameInput, inputBlurHandler: handleNameBlur, reset: resetName } = useInput(value => value.trim() !== ''   )
    const{enteredInput: mailValidity, value: inputMail, hasError: hasErrorMail, inputHandler: handleMailInput, inputBlurHandler: handleMailBlur, reset: resetMail } = useInput((val) => val.includes('@'))

    if(nameValidity && mailValidity) formIsValid = true;

    const submitFormHandler = (event) =>{
        event.preventDefault();
        if(!nameValidity && mailValidity){
            return
        }
        resetMail();
        resetName();
    }

    const nameControl = `form-control ${hasErrorName && `invalid`}`
    const mailControl = `form-control ${hasErrorMail && `invalid`}`


  return (
    <form onSubmit={submitFormHandler}>
      <div className={nameControl}>
        <label htmlFor='name'>Your Name</label>
        <input value={inputName} type='text' id='name' onChange={handleNameInput} onBlur={handleNameBlur}/>
          {(hasErrorName) && <p style={{color:'red'}}>Data Not Valid</p>}
          {/*{enteredInputIsValid && inputTouched && <p style={{color:'lightgreen'}}>Submitted</p>}*/}
      </div>
        <div className={mailControl}>
        <label htmlFor='email'>Your Email</label>
        <input value={inputMail} type='email' id='email' onChange={handleMailInput}
               onBlur={handleMailBlur}/>
        {(hasErrorMail) && <p style={{color:'red'}}>Data Not Valid</p>}
        {/*{enteredInputIsValid && inputTouched && <p style={{color:'lightgreen'}}>Submitted</p>}*/}
    </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

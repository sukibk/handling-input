import { useState } from "react";

const SimpleInput = (props) => {
    const [inputName, setInputName] = useState('');
    const [inputTouched, setInputTouched] = useState(false);
    const [inputMail, setInputMail] = useState('');
    const [inputTouchedMail, setInputTouchedMail] = useState(false);

    const enteredInputNameIsValid = inputName.trim() !== "";
    const enteredMailIsValid = inputMail.includes('@');
    let formIsValid = false;

    if(enteredInputNameIsValid && enteredMailIsValid) formIsValid = true;

    const submitFormHandler = (event) =>{
        event.preventDefault();

        setInputTouched(true);

        if(!enteredInputNameIsValid && enteredMailIsValid){
            return
        }
        setInputName('');
        setInputMail('');
        setInputTouched(false);
        setInputTouchedMail(false);
    }

    const inputNameHandler = (event) => {
        setInputName(event.target.value)
        setInputTouched(true);
    }

    const inputMailHandler = (event) => {
        setInputMail(event.target.value)
        setInputTouched(true);
    }

    const nameControl = `form-control ${!enteredInputNameIsValid && inputTouched && `invalid`}`
    const mailControl = `form-control ${!enteredMailIsValid && inputTouchedMail && `invalid`}`

    const inputBlurHandler = () =>{
        setInputTouched(true);
    }

    const inputMailBlurHandler = () =>{
        setInputTouchedMail(true);
    }

  return (
    <form onSubmit={submitFormHandler}>
      <div className={nameControl}>
        <label htmlFor='name'>Your Name</label>
        <input value={inputName} type='text' id='name' onChange={inputNameHandler} onBlur={inputBlurHandler}/>
          {(!enteredInputNameIsValid && inputTouched) && <p style={{color:'red'}}>Data Not Valid</p>}
          {/*{enteredInputIsValid && inputTouched && <p style={{color:'lightgreen'}}>Submitted</p>}*/}
      </div>
        <div className={mailControl}>
        <label htmlFor='email'>Your Email</label>
        <input value={inputMail} type='email' id='email' onChange={inputMailHandler}
               onBlur={inputMailBlurHandler}/>
        {(!enteredMailIsValid && inputTouchedMail) && <p style={{color:'red'}}>Data Not Valid</p>}
        {/*{enteredInputIsValid && inputTouched && <p style={{color:'lightgreen'}}>Submitted</p>}*/}
    </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

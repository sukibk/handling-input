import { useState } from "react";

const SimpleInput = (props) => {
    const [input, setInput] = useState('');
    const [inputTouched, setInputTouched] = useState(false);

    const enteredInputIsValid = input.trim() !== "";
    let formIsValid = false;

    if(enteredInputIsValid) formIsValid = true;

    const submitFormHandler = (event) =>{
        event.preventDefault();

        setInputTouched(true);

        if(!enteredInputIsValid){
            return
        }
        setInput('');
        setInputTouched(false);
    }

    const inputHandler = (event) => {
        setInput(event.target.value)
        setInputTouched(true);
    }

    const formControl = `form-control ${!formIsValid && inputTouched && `invalid`}`

    const inputBlurHandler = () =>{
        setInputTouched(true);
    }

  return (
    <form onSubmit={submitFormHandler}>
      <div className={formControl}>
        <label htmlFor='name'>Your Name</label>
        <input value={input} type='text' id='name' onChange={inputHandler}
        onBlur={inputBlurHandler}/>
          {(!formIsValid && inputTouched) && <p style={{color:'red'}}>Data Not Valid</p>}
          {/*{enteredInputIsValid && inputTouched && <p style={{color:'lightgreen'}}>Submitted</p>}*/}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

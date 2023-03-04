import {useState} from "react";

const SimpleInput = (props) => {
    const [input, setInput] = useState('');
    const [enteredInputIsValid, setEnteredInputIsValid] = useState(false)
    const [inputTouched, setInputTouched] = useState(false);

    const submitFormHandler = (event) =>{
        event.preventDefault();
        if(input.trim() === ''){
            setEnteredInputIsValid(false)
            return
        }
        setEnteredInputIsValid(true);
    }

    const inputHandler = (event) => {
        setInput(event.target.value)
    }

    const formControl = `form-control ${!enteredInputIsValid && inputTouched && `invalid`}`

  return (
    <form onSubmit={submitFormHandler}>
      <div className={formControl}>
        <label htmlFor='name'>Your Name</label>
        <input value={input} type='text' id='name' onChange={inputHandler}/>
          {(!enteredInputIsValid && inputTouched) && <p style={{color:'red'}}>Data Not Valid</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

import {useState} from "react";

const useInput = (validateValue) =>{
    const [input, setInput] = useState('');
    const [inputTouched, setInputTouched] = useState();

    const enteredInput = validateValue(input);
    const hasError = !enteredInput && inputTouched;



    const inputHandler = (event) => {
        setInput(event.target.value)
        setInputTouched(true);
    }

    const inputBlurHandler = () =>{
        setInputTouched(true);
    }

    const reset = () => {
        setInput('');
        setInputTouched(false);
    }

    return {
        enteredInput,
        value: input,
        hasError,
        inputHandler,
        inputBlurHandler,
        reset
}

}

export default useInput;
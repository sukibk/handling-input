import {useState} from "react";

export default function useInput(validationFunction){
    const [enteredInput, setEnteredInput] = useState('');
    const [inputFieldVisited, setInputFieldVisited] = useState(false);
    let style = `form-control`;

    const inputIsValid = validationFunction(enteredInput);

    if(!inputIsValid && inputFieldVisited) style = style + ` invalid`

    const inputHandler = e => {
        setEnteredInput(e.target.value);
        setInputFieldVisited(true);
    }

    const inputBlurHandler = () => {
        setInputFieldVisited(true);
    }

    const reset = () => {
        setInputFieldVisited(false);
        setEnteredInput('');
    }

    return {
        inputIsValid,
        enteredInput,
        style,
        inputHandler,
        inputBlurHandler,
        reset
    }
}
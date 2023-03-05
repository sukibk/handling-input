import { useReducer } from "react";

const inputStateReducer = (state, action) => {
        if(action.type === 'INPUT'){
            return {value: action.value, isTouched: state.isTouched};}
            if (action.type === 'BLUR') {
                return {isTouched: true, value: state.value};
            }
            if (action.type === 'RESET') {
                return {isTouched: false, value: ''};
            }

    return {
        value: '',
        isTouched: false,
    }
}

export default function useInput(validationFunction){
    let style = `form-control`;

    const [inputState, dispatchInputState] = useReducer(inputStateReducer, {value: '', isTouched: false})

    const inputIsValid = validationFunction(inputState.value);

    if(!inputIsValid && inputState.isTouched) style = style + ` invalid`

    const inputHandler = e => {
        // setEnteredInput(e.target.value);
        // setInputFieldVisited(true);
        dispatchInputState({type: 'INPUT', value: e.target.value});
    }

    const inputBlurHandler = () => {
        dispatchInputState({type: 'BLUR'});
    }

    const reset = () => {
        dispatchInputState({type: 'RESET'});
    }

    return {
        inputIsValid,
        enteredInput: inputState.value,
        style,
        inputHandler,
        inputBlurHandler,
        reset
    }
}
import {ChangeEventHandler, FocusEventHandler, useReducer} from "react"

enum Actions {
    INPUT = 'INPUT',
    BLUR = 'BLUR',
    RESET = 'RESET'
}

type State = {
    value: any,
    isTouched: boolean
};

type Action = {
    type: Actions, value: string
}


const initialInputState: State = {
    value: '',
    isTouched: false
};

const inputStateReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case Actions.INPUT:
            return {value: action.value, isTouched: state.isTouched};
        case Actions.BLUR:
            return {isTouched: true, value: state.value};
        default:
            return initialInputState;
    }
};

const useInput = (validateValue: (value: any) => boolean, initialValue?: any) => {
    if (initialValue) {
        initialInputState.value = initialValue;
    }

    const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState);

    const isValid = validateValue(inputState.value);
    const hasError = !isValid && inputState.isTouched

    const valueChangeHandler: ChangeEventHandler<HTMLInputElement> = event => {
        dispatch({type: Actions.INPUT, value: event.target.value})
    }

    const inputBlurHandler: FocusEventHandler = () => {
        dispatch({type: Actions.BLUR, value: ''})
    }

    const reset = () => {
        dispatch({type: Actions.RESET, value: ''})
    }

    const value = inputState.value;

    return {
        value,
        isValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    }
}

export default useInput;

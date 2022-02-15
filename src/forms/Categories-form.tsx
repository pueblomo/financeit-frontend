import React, {FC} from "react"
import useInput from "../hooks/Use-input.hook"
import Input from "../components/ui/Input"

const CategoriesForm: FC = () => {
    const validateName = (value: string) => {
        return value.trim() !== '';
    }

    const {
        value: enteredDesc,
        isValid: isDescValid,
        hasError: descHasError,
        valueChangeHandler: descChangeHandler,
        inputBlurHandler: descBlurHandler,
        reset: descReset
    } = useInput(validateName);

    const descErrorMessage = descHasError ? "Name fehlt!" : "";

    return (
        <div>
            <Input type='text' id='desc' title='Name' onChange={descChangeHandler} onBlur={descBlurHandler}
                   value={enteredDesc} errorMessage={descErrorMessage}/>
        </div>
    )
};

export default CategoriesForm;

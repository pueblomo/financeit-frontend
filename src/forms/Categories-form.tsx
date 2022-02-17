import React, {FC, MouseEventHandler, useState} from "react"
import useInput from "../hooks/Use-input.hook"
import Input from "../components/ui/Input"
import Category from "../models/Category"
import IconButton from "../components/ui/Icon-button"
import classes from "./Categories-form.module.css"

const CategoriesForm: FC<{ onSubmit: (category: Category) => void }> = (props) => {
    const [formValid, setFormValid] = useState(true);
    const validateString = (value: string) => {
        return value.trim() !== '';
    }

    const {
        value: enteredName,
        isValid: isNameValid,
        hasError: nameHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
    } = useInput(validateString);

    const {
        value: enteredIcon,
        isValid: isIconValid,
        hasError: iconHasError,
        valueChangeHandler: iconChangeHandler,
        inputBlurHandler: iconBlurHandler,
    } = useInput(validateString);

    const nameErrorMessage = nameHasError ? "Name fehlt!" : "";
    const iconErrorMessage = iconHasError ? "Icon fehlt!" : "";

    const addHandler: MouseEventHandler = () => {
        if (isNameValid && isIconValid) {
            const cat: Category = {
                name: enteredName,
                icon: enteredIcon,
                amount: 0
            }
            props.onSubmit(cat);
        } else {
            setFormValid(false);
        }
    };

    return (
        <div>
            <Input type='text' id='desc' title='Name' onChange={nameChangeHandler} onBlur={nameBlurHandler}
                   value={enteredName} errorMessage={nameErrorMessage}/>
            <Input type='text' id='icon' title='Icon' onChange={iconChangeHandler} onBlur={iconBlurHandler}
                   value={enteredIcon} errorMessage={iconErrorMessage}/>
            {!formValid && <p className={classes.error}>Felder nicht befüllt!</p>}
            <IconButton icon="check" onClick={addHandler}/>
        </div>
    )
};

export default CategoriesForm;

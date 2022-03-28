import React, {FC, MouseEventHandler, useState} from "react"
import Expense from "../models/Expense"
import useInput from "../hooks/Use-input.hook"
import Input from "../components/ui/Input"
import classes from "./Expense-form.module.css"
import IconButton from "../components/ui/Icon-button"
import {useParams} from "react-router-dom"

const ExpensesForm: FC<{ onSubmit: (expense: Expense) => void }> = (props) => {
    const [formValid, setFormValid] = useState(true);
    const {catId} = useParams();

    const validateString = (value: string) => {
        return value.trim() !== '';
    }

    const validateNumber = (value: number) => {
        return value >= 0;
    }

    const {
        value: enteredDesc,
        isValid: isDescValid,
        hasError: descHasError,
        valueChangeHandler: descChangeHandler,
        inputBlurHandler: descBlurHandler
    } = useInput(validateString);

    const {
        value: enteredPrice,
        isValid: isPriceValid,
        hasError: priceHasError,
        valueChangeHandler: priceChangeHandler,
        inputBlurHandler: priceBlurHandler
    } = useInput(validateNumber);

    const descErrorMessage = descHasError ? "Description fehlt!" : "";
    const priceErrorMessage = priceHasError ? "Wert größer 0!" : "";

    const addHandler: MouseEventHandler = () => {
        if (isPriceValid && isDescValid) {
            const exp: Expense = {
                description: enteredDesc,
                price: Number((enteredPrice * 100).toFixed(0)),
                categoryId: parseInt(catId as string),
                date: new Date()
            }
            console.log(exp)
            props.onSubmit(exp)
        } else {
            setFormValid(false)
        }
    }

    return (
        <div>
            <Input type='text' id='desc' title='Beschreibung' onChange={descChangeHandler} onBlur={descBlurHandler}
                   value={enteredDesc} errorMessage={descErrorMessage}/>
            <Input type='number' id='price' title='Preis' onChange={priceChangeHandler} onBlur={priceBlurHandler}
                   value={enteredPrice} errorMessage={priceErrorMessage}/>
            {!formValid && <p className={classes.error}>Felder nicht befüllt!</p>}
            <IconButton icon="check" onClick={addHandler}/>
        </div>
    )
};

export default ExpensesForm;

import React, {FC, useEffect, useState} from "react"
import Expense from "../models/Expense"
import {AxiosRequestConfig} from "axios"
import useAxios from "../hooks/Use-axios.hook"
import {useNavigate} from "react-router-dom"
import toast, {Toaster} from 'react-hot-toast';
import classes from "./Expense-add-page.module.css"
import ExpensesForm from "../forms/Expense-form"

const ExpenseAddPage: FC = () => {
    const [expenseState, setExpenseState] = useState<Expense>();
    const axiosConfig: AxiosRequestConfig = {};
    axiosConfig.method = "POST";
    axiosConfig.url = process.env.REACT_APP_SERVER_URL + "/expenses";
    axiosConfig.data = expenseState;
    const [sendRequest] = useAxios(axiosConfig);
    const navigate = useNavigate();

    const onSubmitHandler = (expense: Expense) => {
        setExpenseState(expense);
    }

    useEffect(() => {
        if (expenseState) {
            const promise = sendRequest();
            promise.then(() => {
                navigate('/');
            });
            toast.promise(promise, {
                loading: 'Lade...',
                success: 'Gespeichert',
                error: 'Fehler',
            });
        }
    }, [expenseState]);

    return (
        <div>
            <Toaster position="bottom-center" toastOptions={{
                style: {
                    background: "black",
                    color: "white"
                }
            }}/>
            <div className={classes.headingContainer}>
                <span className={classes.heading}>Ausgabe hinzufügen</span>
            </div>
            <ExpensesForm onSubmit={onSubmitHandler}/>
        </div>
    )
}

export default ExpenseAddPage;

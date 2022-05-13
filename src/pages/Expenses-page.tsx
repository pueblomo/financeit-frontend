import React, {FC, useEffect, useState} from "react"
import {AxiosRequestConfig} from "axios"
import {useParams} from "react-router-dom"
import Expense from "../models/Expense"
import useAxios from "../hooks/Use-axios.hook"
import toast, {Toaster} from "react-hot-toast"
import ExpensesList from "../components/expenses-page/Expenses-list"

const ExpensesPage: FC = () => {
    const {catId} = useParams();
    const axiosConfig: AxiosRequestConfig = {};
    axiosConfig.method = "GET";
    axiosConfig.url = process.env.REACT_APP_SERVER_URL + "/expenses/" + catId;
    const [expenses, setExpenses] = useState<Expense[]>([]);
    const [sendRequest] = useAxios<Expense[]>(axiosConfig)

    useEffect((): void => {
        const promise = sendRequest(undefined, undefined);
        promise.then((data) => setExpenses(data))
            .catch(() => setExpenses([]))

        toast.promise(promise, {
            loading: 'Lade...',
            success: 'Geladen',
            error: 'Fehler',
        });
    }, [])

    return (
        <div>
            <Toaster position="bottom-center" toastOptions={{
                style: {
                    background: "black",
                    color: "white"
                }
            }}/>
            <br/>
            <ExpensesList expenses={expenses}/>
        </div>
    )
}

export default ExpensesPage;

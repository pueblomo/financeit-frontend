import React, {FC, MouseEventHandler, useEffect, useState} from "react"
import Category from "../models/Category"
import classes from "./Categories-page.module.css"
import useAxios from "../hooks/Use-axios.hook"
import {AxiosRequestConfig} from "axios"
import toast, {Toaster} from 'react-hot-toast';
import CategoriesList from "../components/categories-page/Categories-list"
import TotalAmount from "../components/categories-page/Total-amount"
import IconButton from "../components/ui/Icon-button"
import {useNavigate} from "react-router-dom"

const CategoriesPage: FC = () => {
    const axiosConfig: AxiosRequestConfig = {};
    axiosConfig.method = "GET";
    axiosConfig.url = process.env.REACT_APP_SERVER_URL + "/categories";
    const [categories, setCategories] = useState<Category[]>();
    const [sendRequest] = useAxios<Category[]>(axiosConfig);
    const navigate = useNavigate();

    useEffect((): void => {
        const promise = sendRequest();
        promise.then((data) => setCategories(data))
            .catch(() => setCategories([]));

        toast.promise(promise, {
            loading: 'Lade...',
            success: 'Geladen',
            error: 'Fehler',
        });
    }, []);

    let content;

    if (!categories || categories.length <= 0) {
        content = (
            <div className={classes.messageContainer}>
                <span className={classes.message}>Keine Kategorien vorhanden</span>
            </div>
        );
    } else {
        content = (
            <>
                <br/>
                <CategoriesList categories={categories}/>
                <br/>
                <br/>
                <TotalAmount categories={categories}/>
            </>
        )
    }

    const addHandler: MouseEventHandler = () => {
        navigate("addCategory");
    }

    return (
        <div>
            <Toaster position="bottom-center" toastOptions={{
                style: {
                    background: "black",
                    color: "white"
                }
            }}/>
            <IconButton icon="plus" onClick={addHandler}/>
            {content}
        </div>
    )
};

export default CategoriesPage;

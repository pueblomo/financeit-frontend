import React, {FC, useEffect, useState} from "react"
import CategoriesForm from "../forms/Categories-form"
import classes from "./Categories-add-page.module.css"
import Category from "../models/Category"
import useAxios from "../hooks/Use-axios.hook"
import {AxiosRequestConfig} from "axios"
import {useNavigate} from "react-router-dom"
import toast, {Toaster} from 'react-hot-toast';

const CategoriesAddPage: FC = () => {
    const [categoryState, setCategoryState] = useState<Category>();
    const axiosConfig: AxiosRequestConfig = {};
    axiosConfig.method = "POST";
    axiosConfig.url = "categories";
    axiosConfig.data = categoryState;
    const [sendRequest] = useAxios(axiosConfig);
    const navigate = useNavigate();

    const onSubmitHandler = (category: Category) => {
        setCategoryState(category);
    };

    useEffect(() => {
        if (categoryState) {
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
    }, [categoryState]);

    return (
        <div>
            <Toaster position="bottom-center" toastOptions={{
                style: {
                    background: "black",
                    color: "white"
                }
            }}/>
            <div className={classes.headingContainer}>
                <span className={classes.heading}>Kategorie hinzufügen</span>
            </div>
            <CategoriesForm onSubmit={onSubmitHandler}/>
        </div>
    )
};

export default CategoriesAddPage;

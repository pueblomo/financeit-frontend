import React, {FC, useEffect, useState} from "react"
import OverviewList from "../components/overview-page/overview-list"
import {AxiosRequestConfig} from "axios"
import Overview from "../models/Overview"
import overview from "../models/Overview"
import useAxios from "../hooks/Use-axios.hook"
import toast, {Toaster} from "react-hot-toast"
import Chip from "../components/ui/chip"
import classes from "./Overview-page.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

const OverviewPage: FC = () => {
    const axiosConfig: AxiosRequestConfig = {};
    axiosConfig.method = "GET";
    axiosConfig.url = process.env.REACT_APP_SERVER_URL + "overview/month";
    const [overviews, setOverviews] = useState<Overview[]>();
    const [sendRequest] = useAxios<Overview[]>(axiosConfig);
    const [page, setPage] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect((): void => {
        const promise = sendRequest(page, 3);
        promise.then((data) => {
            setLoading(false);
            setOverviews(data)
        }).catch(() => {
            setLoading(false);
            setOverviews([])
        })

        toast.promise(promise, {
            loading: 'Lade...',
            success: 'Geladen',
            error: 'Fehler'
        })
    }, [page])

    let content;
    if (!loading && (!overviews || overview.length <= 0)) {
        content = (
            <div>
                <p>Keine Kategorien gefunden!</p>
            </div>
        )
    }
    if (!loading && overviews && overviews.length > 0) {
        content = (
            <div>
                <br/>
                <Chip>
                    <FontAwesomeIcon icon="chevron-left" size="lg" className={classes.icon}
                                     onClick={() => setPage(prevPage => prevPage - 1)}/>
                    <FontAwesomeIcon icon="chevron-right" size="lg" className={classes.icon}
                                     onClick={() => setPage(prevPage => prevPage + 1)}/>
                </Chip>
                <br/>
                <OverviewList overviews={overviews}/>
            </div>
        )
    }
    return (
        <div>
            <Toaster position="bottom-center" toastOptions={{
                style: {
                    background: "black",
                    color: "white"
                }
            }}/>
            {content}
        </div>
    )
}

export default OverviewPage;

import React, {FC} from "react"
import classes from "./Menu.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {useNavigate} from "react-router-dom"

const Menu: FC = () => {
    const navigate = useNavigate();
    const onExpenses = () => {
        navigate("categories", {replace: true})
    }

    const onOverview = () => {
        navigate("overview", {replace: true})
    }

    return (
        <div className={classes.container}>
            <div className={classes.iconContainer} onClick={onExpenses}>
                <FontAwesomeIcon icon="money-bill" className={classes.icon} size="2x"/>
                <div className={classes.text}>Ausgaben</div>
            </div>
            <div className={classes.iconContainer} onClick={onOverview}>
                <FontAwesomeIcon icon="chart-bar" className={classes.icon} size="2x"/>
                <div className={classes.text}>Übersicht</div>
            </div>
        </div>
    )
}

export default Menu;

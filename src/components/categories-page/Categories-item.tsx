import React, {FC} from "react"
import classes from "./Categories-item.module.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Category from "../../models/Category"
import {IconName} from "@fortawesome/free-solid-svg-icons"
import Card from "../ui/Card"
import {useNavigate} from "react-router-dom"

const CategoriesItem: FC<{ category: Category }> = (props) => {
    const navigate = useNavigate();
    const onCatHandler = () => {
        navigate(props.category.id + "/addExpense")
    }
    return (
        <Card>
            <FontAwesomeIcon icon={props.category.icon as IconName} size="lg" className={classes.icon}/>
            <span className={classes.name} onClick={onCatHandler}>{props.category.name}</span>
            <span className={classes.amount}>{props.category.amount / 100} €</span>
            <FontAwesomeIcon icon="chevron-right" className={classes.chevron}/>
        </Card>
    )
};

export default CategoriesItem;

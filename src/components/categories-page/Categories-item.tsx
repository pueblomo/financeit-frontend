import React, {FC} from "react"
import classes from "./Categories-item.module.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Category from "../../models/Category"
import {IconName} from "@fortawesome/free-solid-svg-icons"
import Card from "../ui/Card"

const CategoriesItem: FC<{ category: Category }> = (props) => {
    return (
        <Card>
            <FontAwesomeIcon icon={props.category.icon as IconName} size="lg" className={classes.icon}/>
            <span className={classes.name}>{props.category.name}</span>
            <span className={classes.amount}>{props.category.amount} €</span>
            <FontAwesomeIcon icon="chevron-right" className={classes.chevron}/>
        </Card>
    )
};

export default CategoriesItem;

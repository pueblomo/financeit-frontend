import React, {FC} from "react"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import classes from "./Add-category-button.module.css"

const AddCategoryButton: FC = () => {
    return (
        <div className={classes.container}>
            <FontAwesomeIcon icon="plus" className={classes.add} size="2x"/>
        </div>
    );
}

export default AddCategoryButton;

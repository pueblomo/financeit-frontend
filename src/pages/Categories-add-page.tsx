import React, {FC, MouseEventHandler} from "react"
import CategoriesForm from "../forms/Categories-form"
import IconButton from "../components/ui/Icon-button"
import classes from "./Categories-add-page.module.css"

const CategoriesAddPage: FC = () => {
    const addHandler: MouseEventHandler = () => {
        console.log("test");
    }

    return (
        <div>
            <div className={classes.headingContainer}>
                <span className={classes.heading}>Kategorie hinzufügen</span>
            </div>
            <CategoriesForm/>
            <IconButton icon="check" onClick={addHandler}/>
        </div>
    )
};

export default CategoriesAddPage;

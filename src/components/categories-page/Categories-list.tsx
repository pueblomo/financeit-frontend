import React, {FC} from "react"
import CategoriesItem from "./Categories-item"
import Category from "../../models/Category"

const CategoriesList: FC<{ categories: Category[] }> = (props) => {
    return (
        <div>
            {props.categories.map(category => {
                return <CategoriesItem key={category.id} category={category}/>
            })}
        </div>
    )
};

export default CategoriesList;

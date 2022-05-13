import React, {FC} from "react"
import classes from "./chip.module.css"

const Chip: FC = (props) => {
    return (
        <div className={classes.container}>
            {props.children}
        </div>
    )
}

export default Chip;

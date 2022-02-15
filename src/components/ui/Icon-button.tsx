import React, {FC, MouseEventHandler} from "react"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import classes from "./Icon-button.module.css"
import {IconName} from "@fortawesome/free-solid-svg-icons"

const IconButton: FC<{ icon: string, onClick: MouseEventHandler }> = (props) => {
    return (
        <div className={classes.container} onClick={props.onClick}>
            <FontAwesomeIcon icon={props.icon as IconName} className={classes.add} size="2x"/>
        </div>
    );
}

export default IconButton;

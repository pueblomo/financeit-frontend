import React, {ChangeEventHandler, FC, FocusEventHandler} from "react"
import classes from './Input.module.css'

const Input: FC<{ id: string, type: string, title: string, onChange: ChangeEventHandler, onBlur: FocusEventHandler, value: any, errorMessage?: string }> =
    (props) => {
        return (
            <div className={classes.container}>
                <span className={classes.title}>{props.title}</span>
                <input className={classes.input} type={props.type} id={props.id} onChange={props.onChange}
                       onBlur={props.onBlur}
                       value={props.value}/>
                {props.errorMessage && props.errorMessage.trim() !== '' &&
                    <p className={classes.error}>{props.errorMessage}</p>}
            </div>
        )
    }

export default Input;

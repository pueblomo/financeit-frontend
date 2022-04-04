import React, {FC} from "react"
import Expense from "../../models/Expense"
import Card from "../ui/Card"
import classes from "./Expense-item.module.css"
import Moment from "moment"

const ExpensesItem: FC<{ expense: Expense }> = (props) => {
    Moment.locale("de")
    return (
        <Card>
            <span>{Moment(props.expense.date).format("d.MM")}</span>
            <span className={classes.name}>{props.expense.description}</span>
            <span className={classes.amount}>{(props.expense.price / 100).toFixed(2)} €</span>
        </Card>
    )
}

export default ExpensesItem;

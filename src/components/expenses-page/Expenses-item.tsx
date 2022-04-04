import React, {FC} from "react"
import Expense from "../../models/Expense"
import Card from "../ui/Card"
import classes from "./Expense-item.module.css"
import 'moment/locale/de'
import moment from "moment"

const ExpensesItem: FC<{ expense: Expense }> = (props) => {
    moment.locale('de')
    return (
        <Card>
            <span>{moment(props.expense.date).format("MMM Do")}</span>
            <span className={classes.name}>{props.expense.description}</span>
            <span className={classes.amount}>{(props.expense.price / 100).toFixed(2)} €</span>
        </Card>
    )
}

export default ExpensesItem;

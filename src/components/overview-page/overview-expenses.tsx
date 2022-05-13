import React, {FC} from "react"
import Expense from "../../models/Expense"
import ExpensesList from "../expenses-page/Expenses-list"
import classes from "./overview-expenses.module.css"

const OverviewExpenses: FC<{ expenses: Expense[] }> = (props) => {
    return (
        <div>
            <span className={classes.message}>Ausgaben</span>
            <ExpensesList expenses={props.expenses}/>
        </div>
    )
}

export default OverviewExpenses;

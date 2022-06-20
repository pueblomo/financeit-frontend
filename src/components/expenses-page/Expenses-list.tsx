import React, {FC} from "react"
import Expense from "../../models/Expense"
import ExpensesItem from "./Expenses-item"
import classes from "./Expenses-list.module.css"

const ExpensesList: FC<{ expenses: Expense[] }> = (props) => {

    let content = (
        <div className={classes.messageContainer}>
            <span className={classes.message}>Keine Ausgaben vorhanden</span>
        </div>
    );

    if (props.expenses && props.expenses.length > 0) {
        content = (
            <div className={classes.listContainer}>
                {props.expenses.map(expense => {
                    return <ExpensesItem key={expense.id} expense={expense}/>
                })}
            </div>
        )
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default ExpensesList;

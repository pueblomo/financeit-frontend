import React, {FC} from "react"
import Expense from "../../models/Expense"
import ExpensesItem from "./Expenses-item"

const ExpensesList: FC<{ expenses: Expense[] }> = (props) => {

    // TODO: check expense defined

    return (
        <div>
            {props.expenses.map(expense => {
                return <ExpensesItem key={expense.id} expense={expense}/>
            })}
        </div>
    )
}

export default ExpensesList;

import React, {FC, useState} from "react"
import Overview from "../../models/Overview"
import OverviewItem from "./overview-item"
import Expense from "../../models/Expense"
import OverviewExpenses from "./overview-expenses"
import classes from "./overview-list.module.css"

const OverviewList: FC<{ overviews: Overview[] }> = (props) => {
    const [expenses, setExpenses] = useState<Expense[]>([]);

    let content: JSX.Element = (
        <p></p>
    )

    const onExpenses = (exp: Expense[]) => {
        setExpenses(exp);
    }

    if (props.overviews && props.overviews.length > 0) {
        content = (
            <div className={classes.listContainer}>
                {props.overviews.map((overview, index) => {
                    return <OverviewItem key={index} overview={overview}
                                         onExpenses={onExpenses}></OverviewItem>
                })}
                <br/>
                <br/>
                {expenses && expenses.length > 0 && <OverviewExpenses expenses={expenses}/>}
            </div>
        )
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default OverviewList;

import React, {FC, useEffect, useState} from "react"
import Card from "../ui/Card"
import Category from "../../models/Category"
import classes from "./Total-amount.module.css"

const TotalAmount: FC<{ categories: Category[] }> = (props) => {
    const [totalAmount, setTotalAmount] = useState<number>(0.00);

    useEffect(() => {
        let amount = 0.00;
        props.categories.forEach(cat => amount = amount + cat.amount);
        setTotalAmount(amount);
    }, [props.categories]);

    return (
        <div className={classes.container}>
            <Card>
                <span data-testid="totalAmount">{(totalAmount / 100).toFixed(2)} €</span>
            </Card>
        </div>
    )
}

export default TotalAmount;

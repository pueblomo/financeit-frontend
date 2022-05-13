import React, {FC, useState} from "react"
import Overview from "../../models/Overview"
import Card from "../ui/Card"
import classes from './overview-item.module.css'
import 'moment/locale/de'
import moment from "moment"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {IconName} from "@fortawesome/free-solid-svg-icons"
import Chip from "../ui/chip"

const OverviewItem: FC<{ overview: Overview, onExpenses: any }> = (props) => {
    const [toggleActive, setToggleActive] = useState(false)
    const sum = props.overview.categories.reduce(
        (sum, current) =>
            sum + current.category.amount, 0
    )


    const onShowCategories = () => {
        setToggleActive(!toggleActive)
    }

    const icon = toggleActive ? "chevron-circle-down" : "chevron-circle-right"

    return (
        <>
            <Card>
                <FontAwesomeIcon icon={icon as IconName} size="lg" className={classes.icon} onClick={onShowCategories}/>
                <span className={classes.date}
                      onClick={onShowCategories}>{moment(props.overview.date).format("MMM y")}</span>
                <span>{(sum / 100).toFixed(2)} €</span>
            </Card>
            {toggleActive &&
                <div className={classes.expenseContainer}>
                    <Card>
                        {props.overview.categories
                            .sort((catOne, catTwo) => catTwo.category.amount - catOne.category.amount)
                            .map((cat, index) => {
                                return (
                                    <Chip key={index}>
                                        <FontAwesomeIcon icon={cat.category.icon as IconName} size="sm"
                                                         className={classes.iconChip}
                                                         onClick={() => props.onExpenses(cat.expenses)}/>
                                        <span
                                            onClick={() => props.onExpenses(cat.expenses)}>{(cat.category.amount / 100).toFixed(2)} €</span>
                                    </Chip>
                                )
                            })}
                    </Card>
                </div>
            }
        </>
    )
};

export default OverviewItem;

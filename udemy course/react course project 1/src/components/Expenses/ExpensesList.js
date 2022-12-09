import React from "react";
import ExpenceItem from './ExpenseItem';

export default function ExpensesList(props) {

    const ExpenseElements = props.filteredItems.map(item => {
        return (<ExpenceItem key={item.id} title={item.title} amount={item.amount} date={item.date} />)
    })

    if(props.filteredItems.length == 0) {
        return <p className="no-expenses">no expenses found</p>
    }

    return (
        <li className="expenses-list">
        {ExpenseElements}
        </li>
    )

}
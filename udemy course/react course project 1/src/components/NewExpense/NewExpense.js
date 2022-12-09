import React from "react";
import ExpenseForm from "./ExpenseForm";

export default function NewExpense(props) {
    const saveExpenseDataHandler = (expense) => {
        props.addNewExpenseHandler(expense)        
    }

    const [formVisibility,setFormVisibility] = React.useState(false)

    const changeFormVisibilityHandler = () => {
        setFormVisibility(prevState => !prevState)
    }
    return (
        <div className="new-expense">
            {formVisibility ? 
            <ExpenseForm saveExpenseDataHandler={saveExpenseDataHandler} onCancel={changeFormVisibilityHandler} /> : 
            <button onClick={changeFormVisibilityHandler}>Add New Expense</button>}
        </div>
    )
}
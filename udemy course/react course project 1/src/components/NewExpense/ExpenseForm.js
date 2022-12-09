import React from "react";

export default function ExpenseForm(props) {

    const [enteredTitle,setEnteredTitle] = React.useState('')
    const [enteredAmount,setEnteredAmount]  = React.useState('')
    const [enteredDate,setEnteredDate]  = React.useState('')
    // const [userInputs,setUserInputs] = React.useState(
    //     {
    //         enteredTitle: '',
    //         enteredAmount: '',
    //         enteredDate: '',
    //     }
    // )


    const titleChangeHandler = (event) => {
        setEnteredTitle(event.currentTarget.value)
        // setUserInputs(prevInputs => {
        //     return {
        //         ...prevInputs,
        //         enteredTitle: event.currentTarget.value
        //     }
        // })
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.currentTarget.value)
        // setUserInputs(prevInputs => {
        //     return {
        //         ...prevInputs,
        //         enteredAmount: event.currentTarget.value
        //     }
        // })
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.currentTarget.value)
        // setUserInputs(prevInputs => {
        //     return {
        //         ...prevInputs,
        //         enteredDate: event.currentTarget.value
        //     }
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const expenseDate = {
            title : enteredTitle,
            amount : enteredAmount,
            date: new Date(enteredDate)
        }
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
        props.saveExpenseDataHandler(expenseDate)
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="expense-form">
                <div className="form-item">
                    <label>Title</label>
                    <input onChange={titleChangeHandler} value={enteredTitle} type='text'></input>
                </div>
                <div className="form-item">
                    <label>Amount</label>
                    <input step='0.01' onChange={amountChangeHandler} value={enteredAmount} type='number'></input>
                </div>
                <div className="form-item">
                    <label>Date</label>
                    <input onChange={dateChangeHandler} value={enteredDate} type='date'></input>
                </div>
            </div>
            <div className="expense-form__actions">
                <button type="reset" onClick={props.onCancel}>cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}
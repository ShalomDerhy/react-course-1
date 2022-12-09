import React from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import ExpenseData from './components/Expenses/ExpenseData'



export default function App() {
  const [data,setData] = React.useState(ExpenseData)

  const addNewExpenseHandler = (expense) => {
    const newExpense = {
      ...expense,
      id: `e${data.length+1}`
    }
    setData(prevData =>{
      return [
        newExpense,
        ...prevData
      ]
    })
  }

    return ( 
      <div>
        <NewExpense addNewExpenseHandler={addNewExpenseHandler} />
        <Expenses ExpenseData={data} />
      </div>
    );
}
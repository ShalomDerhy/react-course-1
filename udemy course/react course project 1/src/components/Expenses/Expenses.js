import React from 'react';
// import ExpenceItem from './ExpenseItem';
import Container from '../Container';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

export default function Expenses(props) {
  const [selectedYear, setSelectedYear] = React.useState('2022')

  const filteredItems = props.ExpenseData.filter(item => {return item.date.getFullYear().toString() == selectedYear})
  
  // const ExpenseElements = filteredItems.map(item => {
  //   return (<ExpenceItem key={item.id} title={item.title} amount={item.amount} date={item.date} />)
  // })
  
  const saveSelectedYearHandler = (year) => {
    setSelectedYear(year)
  }
  
    return ( 
        <Container className='expenses'> 
        <ExpensesFilter selectedYear={selectedYear}  saveSelectedYearHandler={saveSelectedYearHandler}/>
        <ExpensesChart filteredItems={filteredItems} />
        {/* { filteredItems.length == 0 ?<p className='no-expenses'>no expenses found</p> : ExpenseElements} */}
        <ExpensesList filteredItems={filteredItems} />
        </Container>
    );
}
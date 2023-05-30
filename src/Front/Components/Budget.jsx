import { useState } from 'react';
import { SlPlus, SlMinus } from 'react-icons/sl';
import './Budget.css';

const Budget = () => {
  const [budgetAmount, setBudgetAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [expenseName, setExpenseName] = useState('');

  const handleDecrement = () => {
    if (budgetAmount - totalAmount < 0) {
      alert("You don't have enought cash!");
      return;
    }
    setBudgetAmount(budgetAmount - totalAmount);
    setTotalAmount(0);
    setExpenses([...expenses, { name: expenseName, amount: -totalAmount }]);
    setExpenseName('');
  };

  const handleIncrement = () => {
    setBudgetAmount(budgetAmount + totalAmount);
    setTotalAmount(0);
    setExpenses([...expenses, { name: expenseName, amount: totalAmount }]);
    setExpenseName('');
  };

  const handleReset = () => {
    setBudgetAmount(0);
    setTotalAmount(0);
    setExpenses([]);
    setExpenseName('');
  };

  return (
    <div className='budget'>
      <div className='container-budget'>
        <h2>Budget</h2>
        <p>{budgetAmount}€</p>
        <div className='countCalc'>
          <input
            className='amount-input'
            type='number'
            value={totalAmount}
            onChange={(e) => setTotalAmount(e.target.value)}
          />
          <input
            className='forwhat'
            type='text'
            value={expenseName}
            placeholder='For What?'
            onChange={(e) => setExpenseName(e.target.value)}
          />
          <button className='budget-btn' onClick={handleDecrement}>
            <SlMinus
              style={{ width: '100%', height: '100%', color: '#666666' }}
            />
          </button>
          <button className='budget-btn' onClick={handleIncrement}>
            <SlPlus
              style={{ width: '100%', height: '100%', color: '#666666' }}
            />
          </button>
          <button className='reset' onClick={handleReset}>
            Reset
          </button>
        </div>
        <div className='expense-history'>
          <h3>Expense history:</h3>
          {expenses.length === 0 ? (
            <p>No expenses recorded</p>
          ) : (
            <ul>
              {expenses
                .map((expense, index) => (
                  <li key={index}>
                    {expense.amount > 0 ? '+' : ''}
                    {expense.amount}€ {expense.name}
                  </li>
                ))
                .reverse()}
            </ul>
          )}
        </div>
      </div>
      <div className='container-button'></div>
    </div>
  );
};

export default Budget;

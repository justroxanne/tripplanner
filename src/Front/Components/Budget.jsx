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
      alert('Le montant soustrait est supérieur au budget restant.');
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
    <>
      <div className='container-budget'>
        <h2>Budget</h2>
        <p>Total Budget : {budgetAmount} €</p>
        <div className='countCalc'>
          <input
            className='amount'
            type='number'
            value={totalAmount}
            onChange={(e) => setTotalAmount(e.target.value)}
          />
          <button onClick={handleIncrement}>
            <SlPlus style={{ color: '#666666' }} />
          </button>
          <button onClick={handleDecrement}>
            <SlMinus style={{ color: '#666666' }} />
          </button>
          <input
            className='forwhat'
            type='text'
            value={expenseName}
            placeholder='For What?'
            onChange={(e) => setExpenseName(e.target.value)}
          />
          <button className='reset' onClick={handleReset}>
            Reset
          </button>
        </div>
        <div className='expense-history'>
          <h3>Expense history:</h3>
          {expenses.length === 0 ? (
            <p>Aucune dépense enregistrée.</p>
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
    </>
  );
};

export default Budget;

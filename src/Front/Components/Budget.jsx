import { useState } from 'react';
import "./Budget.css"

const Budget = () => {
  const [budgetAmount, setBudgetAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleDecrement = () => {
    setBudgetAmount(budgetAmount - totalAmount);
    setTotalAmount(0);
  }

  const handleIncrement = () => {
    setBudgetAmount(budgetAmount + totalAmount);
    setTotalAmount(0);
  }

  return (
    <div className='container-budget'>
      <h2>Budget</h2>
      <p>Montant total : {budgetAmount} €</p>
      <input 
        type='number'
        value={totalAmount}
        onChange={(e) => setTotalAmount(parseInt(e.target.value))}
      />
      <button onClick={handleDecrement}>Soustraire</button>
      <button onClick={handleIncrement}>Ajouter</button>
    </div>
  )
}

export default Budget;
import { useState } from 'react';
import {SlPlus, SlMinus} from 'react-icons/sl'
import "./Budget.css"

const Budget = () => {
  const [budgetAmount, setBudgetAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleDecrement = () => {
    if (budgetAmount - totalAmount < 0) {
      alert("Le montant soustrait est supérieur au budget restant.");
      return;
    }
    setBudgetAmount(budgetAmount - totalAmount);
    setTotalAmount(0);
  }

  const handleIncrement = () => {
    setBudgetAmount(budgetAmount + totalAmount);
    setTotalAmount(0);
  }

  const handleReset = () => {
    setBudgetAmount(0);
    setTotalAmount(0);
  }

  return (<>
    <div className='container-budget'>
      <h2>Budget</h2>
      <p>
        Total Budget : {budgetAmount} €
        <input className='total'
          type='number'
          value={budgetAmount}
          onChange={(e) => setBudgetAmount(parseInt(e.target.value))}
        />
      </p>
      <p>
        Amount to add or subtract :
        <input className='Ajout-Soustraire'
          type='number'
          value={totalAmount}
          onChange={(e) => setTotalAmount(parseInt(e.target.value))}
        />   
        <button onClick={handleIncrement}><SlPlus style={{color:'#666666'}}/></button>
        <button onClick={handleDecrement}><SlMinus style={{color:'#666666'}}/></button>
      </p>
      <div className='container-reset'>
        <button className='reset'onClick={handleReset}>Reset</button>
      </div>
      </div>
      <div className='container-button'>
      </div>
   
    </>
  )
}

export default Budget;
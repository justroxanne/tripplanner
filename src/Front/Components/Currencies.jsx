import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Currencies = ({budgetAmount}) => {
    const [converted, setConvert]= useState(0);
    const currency = 'bam';

    useEffect(() => {
        axios
            .get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then(res => {
                 const rate = res.data[currency];
                 setConvert(budgetAmount / rate);
                 console.log(res.data);
                 })
          .catch(err => {
            console.log(err);
          });
      }, [budgetAmount]);
  
  return (
    <div className='currencies'>    
    <h2>Currencies</h2>
    <p>Budget en USD : {converted.toFixed(2)}</p>
</div>
)
}
export default Currencies
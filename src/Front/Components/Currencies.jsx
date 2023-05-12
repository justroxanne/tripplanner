import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Currencies = () => {
  const [amount, setAmount] = useState(0);//pour stocker la valeur saisie par l'utilisateur dans le champ de saisie.
  const [converted, setConverted]= useState(0);//pour convertir
  const [currency, setCurrency] = useState('usd');//pour stocker la devise choisie par l'utilisateur dans le menu déroulant.
  const [currenciesList, setCurrenciesList] = useState([]);// pour stocker la liste de devises disponibles récupérées à partir de l'API.

    useEffect(() => {
        axios
            .get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json`)
            .then(res => {
                 setCurrenciesList(res.data);
                 })
          .catch(err => {
            console.log(err);
          });
      }, []);

      const objKeys = Object.keys(currenciesList)



     //pour gérer les changements de valeur dans le champ de saisie et le menu déroulant, respectivement.
      const handleAmountChange = (event) => {
        setAmount(event.target.value);
      };
    
      const handleCurrencyChange = (event) => {
        setCurrency(event.target.value);
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        axios
          .get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json` )
          .then(({data}) => {
            const rate = 1 / data.eur[currency];
            const converted = amount * rate;
            setConverted(converted);
          })
          .catch((err) => {
            console.log(err);
          });
      }; 


  
  return (
    <div className='currencies'>
    <h2>Currencies</h2>
    <form onSubmit={handleSubmit}>
      <label htmlFor='amount'></label>
      <input
        id='amount'
        type='number'
        step='0.01'
        value={amount}
        onChange={handleAmountChange}
      />
      <br />
      <label htmlFor='currency'>Choose a currency:</label>
      <select id='currency' value={currency} onChange={handleCurrencyChange}>

        {objKeys.map((objKey) => (
          <option key={`${objKey}`} value={objKey}>
            {currenciesList[objKey]}
          </option>
        ))}
      </select>
      <br />
      <button type='submit'>Convert</button>
      <p>Budget in {currency}: {converted.toFixed(2)}€</p>
    </form>
  </div>
);
};

export default Currencies
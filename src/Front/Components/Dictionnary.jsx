import React from 'react';
import axios from 'axios';
import "./Dictionnary.css";

const Dictionnary = () => {

  
  axios
  .get('')
  .then((res) =>{
    setdictionary(res.data.results)
  })
  
  return (
    <div>Dictionnary</div>
  )
}

export default Dictionnary
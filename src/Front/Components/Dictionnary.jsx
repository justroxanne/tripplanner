import React, { useState } from 'react';
import axios from 'axios';
import './Dictionnary.css';

const Dictionnary = () => {
  const [search, setSearch] = useState('');
  const [research, setResearch] = useState([]);

  const submit = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
      .then((res) => setResearch(res.data));
    console.log(res.data);
  };

  return (
    <div className='dictionnary-container'>
      <div className='dictionnary'>
        <form className='dictionnary-form'>
          <input
            className='input'
            type='text'
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            onSubmit={submit}
            placeholder='What do you want to say ?'
          />
        </form>
        <div className='result'>{research.word}</div>
      </div>
    </div>
  );
};

export default Dictionnary;

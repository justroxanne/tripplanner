import React, { useState } from 'react';
import axios from 'axios';
import './Dictionary.css';

const Dictionary = () => {
  const [search, setSearch] = useState('');
  const [research, setResearch] = useState({});

  const submit = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
      .then((res) => setResearch(res.data[0]))
      .catch((error) => {
        console.log(error);
        setResearch({});
      });
  };

  return (
    <div className='dictionary'>
      <h2>Dictionary</h2>
      <form className='dictionary-form' onSubmit={submit}>
        <input
          className='input'
          type='text'
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder='Mute ?'
        />
      </form>
      <div className='result'>
        {research.meanings
          ? research.meanings[0].definitions[0].definition
          : 'No definition found'}
      </div>
    </div>
  );
};

export default Dictionary;

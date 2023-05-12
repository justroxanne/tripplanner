import React, { useState } from 'react';
import './Login.css';

const Login = ({ handleSubmit }) => {
  const [chosenUsername, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (chosenUsername && password) {
      setSubmitted(true);
      handleSubmit();
    } else {
      alert('Username or password invalid');
    }
  };

  return (
    <div className='login'>
      <form>
        <input
          type='text'
          name='username'
          id='username'
          placeholder='Username'
          onChange={handleUsername}
          value={chosenUsername}
          required
        />
        <input
          type='password'
          name='password'
          id='password'
          placeholder='Password'
          onChange={handlePassword}
          value={password}
          required
        />
        <input
          className='submit'
          type='submit'
          value='Submit'
          onClick={handleClick}
          disabled={submitted}
        />
      </form>
    </div>
  );
};

export default Login;

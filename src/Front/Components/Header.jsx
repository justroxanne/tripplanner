import React from 'react';
import picture from '../assets/Profil.jpg';
import { useState } from 'react';
import './Header.css';

const Header = ({ handleSubmit }) => {
  const logOut = () => {
    handleSubmit();
  };

  return (
    <header>
      <h1>Hi, Ptbambie!</h1>
      <div className='photo-container'>
        <img src={picture} alt='Profil'></img>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import picture from '../assets/Profil.jpg';
import { useState } from 'react';
import './Header.css';

const Header = () => {
  const [user, setUser] = useState();

  return (
    <header>
      <p>Hi, Ptbambie!</p>
      <div className='photo-container'>
        <img src={picture} alt='Profil'></img>
      </div>
    </header>
  );
};

export default Header;

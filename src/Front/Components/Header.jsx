import React from 'react';
import picture from '../assets/Profil.jpg'
import { useState } from 'react';
import "./Header.css";

const Header = () => {
  const [user, setUser] = useState();

  return (
    <header>
          <p>Hi, Ptbambie!</p>
          <img src={picture} alt='Profil'></img>
    </header>
  )
}

export default Header 
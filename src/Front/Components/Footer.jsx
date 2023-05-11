import React, { useState } from 'react';
import './Footer.css';
import Calendar from 'react-calendar';

const Footer = () => {
  const [value, onChange] = useState(new Date());

  return (
    <footer>
      <Calendar onChange={onChange} value={value} />
    </footer>
  );
};

export default Footer;

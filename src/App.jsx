import { useState } from 'react';
import Header from './Front/Components/Header';
import Footer from './Front/Components/Footer';
import Budget from './Front/Components/Budget';
import Dictionary from './Front/Components/Dictionary';
import Currencies from './Front/Components/Currencies';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Header />
      <main>
        <div className='converters'>
          <Dictionary />
          <Currencies />
        </div>
        <Budget />
      </main>
      <Footer />
    </div>
  );
}

export default App;

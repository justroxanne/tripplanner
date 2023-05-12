import { useState } from 'react';
import Header from './Front/Components/Header';
import Footer from './Front/Components/Footer';
import Budget from './Front/Components/Budget';
import Dictionary from './Front/Components/Dictionary';
import Login from './Front/Components/Login';
import './App.css';

function App() {
  const [isVisible, setIsVisible] = useState(true);

  const handleSubmit = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className='app'>
      {isVisible && <Login handleSubmit={handleSubmit} />}
      <Header handleSubmit={handleSubmit} />
      <div className='converters'>
        <Dictionary />
      </div>
      <Budget />
      <Footer />
    </div>
  );
}

export default App;

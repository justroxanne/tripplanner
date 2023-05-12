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
      <Dictionary />
      <Currencies />
      <Budget />
      <Footer />
    </div>
  );
}

export default App;

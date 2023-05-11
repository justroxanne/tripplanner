import Header from './Front/Components/Header';
import Footer from './Front/Components/Footer';
import Budget from './Front/Components/Budget';
import Dictionary from './Front/Components/Dictionary';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Header />
      <Dictionary />
      <Budget />
      <Footer />
    </div>
  );
}

export default App;

import Header from './Front/Components/Header'
import Footer from './Front/Components/Footer';
import Budget from './Front/Components/Budget';
import Dictionnary from './Front/Components/Dictionnary';
import './App.css';


function App() {
  return (
    <div className='app'>
      <Header />
      <Dictionnary />
      <Budget />
      <Footer />
    </div>
  );
}

export default App;

import './App.css';
import { Route,Routes,Navigate   } from 'react-router-dom';
import Landing from './components/Landing.jsx';import Navbar from './components/Navbar';
import QuoteDay from './components/QuoteDay';
import Category from './components/Category';
import Mood from './components/Mood';
import Footer from './components/Footer.jsx';
function App() {
  return (
    <>
       <div className="App container mx-auto md:mx-auto sm:mx-autobg-emerald-200 ">
      <div className='container '>
      <Navbar />
      <QuoteDay/>
      <Category/>
      <Mood/>
      </div>
    
    </div>
    <hr className='border-solid border-2 border-sky-500' />
    <Footer/>
    </>
 
  );
}

export default App;

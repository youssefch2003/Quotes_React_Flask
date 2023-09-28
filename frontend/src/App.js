import './App.css';
import { Route,Routes,Navigate   } from 'react-router-dom';
import Landing from './components/Landing.jsx';
function App() {
  return (
    <div className="App container bg-emerald-200 ">
      
     <Routes>
        <Route path='/' element={ <Navigate to="/hello" /> }/>
        <Route path='/hello' element={<Landing  />}/>
     </Routes>
    </div>
  );
}

export default App;

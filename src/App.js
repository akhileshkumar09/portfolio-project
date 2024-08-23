import './App.css';
import MainPage from './pages/MainPage';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
    
     <MainPage/>
    </div>
    </Router>
  );
}

export default App;

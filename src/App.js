import './App.css';
// import First from './First';
import MainPage from './pages/MainPage';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
    {/* <First/> */}
     <MainPage/>
    </div>
    </Router>
  );
}

export default App;

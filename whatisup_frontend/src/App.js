import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Data from './Pages/Data';
import Hello from './Pages/Hello';

function App() {
  return (
    <Routes>
      <Route path='/*' element={<Hello/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path='/data' element={<Data/>}/>
    </Routes>
  );
}

export default App;

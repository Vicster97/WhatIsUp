import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Home from './Pages/Home';
import Data from './Pages/Data';

function App() {
  return (
    <Router basename="/home">
      <Route exact path="/" component={Home}/>
      <Route exact path='/data' component={Data}/>
    </Router>
  );
}

export default App;

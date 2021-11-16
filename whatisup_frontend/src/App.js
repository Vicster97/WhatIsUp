import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Home from './Pages/Home';
import Data from './Pages/Data';
import Hello from './Pages/Hello';

function App() {
  return (
    <Router basename="/">
      <Route exact path='' component={Hello}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path='/data' component={Data}/>
    </Router>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Home from './Pages/Home';

function App() {
  return (
    <Router basename="/home">
      <Route exact path="/" component={Home}/>
    </Router>
  );
}

export default App;

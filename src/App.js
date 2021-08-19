import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './pages';
import contact from './pages/contact';

function App() {
  return (
    <Router>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/contact" component={contact} exact />
    </Switch>
    </Router>
  );
}

export default App;

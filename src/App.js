import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from './pages';
import contactPage from './pages/contact';

function App() {
  return (
    <Router>
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/contact" component={contactPage} exact />
    </Switch>
    </Router>
  );
}

export default App;

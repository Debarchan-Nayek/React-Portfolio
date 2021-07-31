import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <div className="App" >
    <ScrollToTop />
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;

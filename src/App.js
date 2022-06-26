
import './App.css';
import Header from './components/header/header.js'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home.js';
import Movies from './components/Movies/Movies';
import MovieDetail from './components/Movies/MovieDetail';

function App() {
  return (
    <div className='container'>
    <div className="App">
      <Router>
        <Header/>
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Movies} />
        <Route path="/details/:id" exact component={MovieDetail} />
        </Switch>
      </Router>
    </div>
    </div>
  );
}

export default App;

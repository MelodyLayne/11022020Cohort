// import { Movies, MovieDetails, Stocks, Home } from './components';
import Home from './components/Home';
import Movies from './components/Movies';
import Stocks from './components/Stocks';
import { Route, Switch, NavLink } from 'react-router-dom';

function App() {
  return (
    <div className='comp main'>
      <h1>App Component</h1>

      <nav className='comp nav'>
        <ul>
          <li>
            <a href='/'>Anchor</a>
          </li>
          <li>
            <NavLink activeClassName='purple' exact to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='purple' to='/stocks'>
              Stocks
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='purple' to='/movies'>
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/stocks'>
          <Stocks />
        </Route>
        <Route path='/movies'>
          <Movies />
        </Route>
        <Route>
          <h1>No Page Found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

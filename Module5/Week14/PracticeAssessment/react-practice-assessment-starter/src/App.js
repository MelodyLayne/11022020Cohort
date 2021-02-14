import React from 'react';
import { Switch, Route } from 'react-router-dom';
import fruits from "./mockData/fruits.json";
import FruitsIndex from './components/FruitsIndex';
import Navigation from './components/Navigation';
import FruitForm from './components/FruitForm';
import FavoriteFruit from './components/FavoriteFruit'
import SetFavoriteFruit from './components/SetFavoriteFruit'
import FruitShow from './components/FruitShow'

function App() {
  return (
    <>
      <h1>Welcome to Fruits App</h1>
      <Navigation />
      <Switch>
        <Route path='/' exact>
          <FruitsIndex fruits={fruits} />
        </Route>
        <Route path='/fruits/new'>
          <FruitForm />
        </Route>
        <Route path='/fav-fruit'>
          <FavoriteFruit />
        </Route>
        <Route path='/set-fav-fruit'>
          <SetFavoriteFruit />
        </Route>
        <Route path='/fruits/:fruitId'>
          <FruitShow />
        </Route>
      </Switch>
    </>
  );
}

export default App;

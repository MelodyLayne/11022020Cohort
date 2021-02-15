import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import CatsIndex from './components/CatsIndex';
import CatForm from './components/CatForm';
import PhotoShow from './components/PhotoShow';
import TogglePhotoType from "./components/TogglePhotoType";
import CatShow from "./components/CatShow";
import cats from "./mockData/cats.json";

function App() {
  return (
    <>
      <h1>Welcome to Pet App</h1>
      <Navigation />
      <Switch>
        <Route path='/' exact>
          <CatsIndex cats={cats} />
        </Route>
        <Route path='/cats/new'>
          <CatForm />
        </Route>
        <Route path='/photo'>
          <PhotoShow />
        </Route>
        <Route path='/toggle-photo-type'>
          <TogglePhotoType />
        </Route>
        <Route path='/cats/:catId'>
          <CatShow />
        </Route>
        <Route>
          <h2>Page Not Found</h2>
        </Route>
      </Switch>

    </>
  );
}

export default App;

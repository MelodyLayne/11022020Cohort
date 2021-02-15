import React from 'react';
import { shallow, mount } from 'enzyme';

import App from '../App';
import { Router } from 'react-router-dom';
import PhotoProvider from '../context/PhotoContext';
import CatsIndex from '../components/CatsIndex';
import CatForm from '../components/CatForm';
import PhotoShow from '../components/PhotoShow';
import TogglePhotoType from '../components/TogglePhotoType';
import CatShow from '../components/CatShow';
import { createMemoryHistory } from "history";

jest.mock('react', () => ({
  ...jest.requireActual('react'), // use actual for all non-hook parts
  useContext: () => ({
    photoUrl: "/images/hello",
    photoType: "/hello",
    setPhotoType: () => {},
  })
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({ catId: "1" }),
  useRouteMatch: () => ({ url: `/cats/1` }),
}));

describe('(6 points) Routes', () => {
  test ('(1 points) CatsIndex should render at the path of "/" exactly', () => {
    const history = createMemoryHistory();
    history.push('/');
    const appWrapper = mount(
      <Router history={history}>
        <PhotoProvider>
          <App />
        </PhotoProvider>
      </Router>
    );
  
    expect(appWrapper.find(CatsIndex)).toHaveLength(1);
    
    expect(appWrapper.find(CatShow)).toHaveLength(0);
    expect(appWrapper.find(CatForm)).toHaveLength(0);
    expect(appWrapper.find(PhotoShow)).toHaveLength(0);
    expect(appWrapper.find(TogglePhotoType)).toHaveLength(0);
  });
  
  test ('(1 points) CatForm should render at the path of "/cats/new"', () => {
    const history = createMemoryHistory();
    history.push('/cats/new');
    const appWrapper = mount(
      <Router history={history}>
        <PhotoProvider>
          <App />
        </PhotoProvider>
      </Router>
    );
  
    expect(appWrapper.find(CatForm)).toHaveLength(1);
    
    expect(appWrapper.find(CatsIndex)).toHaveLength(0);
    expect(appWrapper.find(CatShow)).toHaveLength(0);
    expect(appWrapper.find(PhotoShow)).toHaveLength(0);
    expect(appWrapper.find(TogglePhotoType)).toHaveLength(0);
  });
  
  test ('(1 points) PhotoShow should render at the path of "/photo"', () => {
    const history = createMemoryHistory();
    history.push('/photo');
    const appWrapper = mount(
      <Router history={history}>
        <PhotoProvider>
          <App />
        </PhotoProvider>
      </Router>
    );
  
    expect(appWrapper.find(PhotoShow)).toHaveLength(1);
  
    expect(appWrapper.find(CatsIndex)).toHaveLength(0);
    expect(appWrapper.find(CatShow)).toHaveLength(0);
    expect(appWrapper.find(CatForm)).toHaveLength(0);
    expect(appWrapper.find(TogglePhotoType)).toHaveLength(0);
  });
  
  test ('(1 points) TogglePhotoType should render at the path of "/toggle-photo-type"', () => {
    const history = createMemoryHistory();
    history.push('/toggle-photo-type');
    const appWrapper = mount(
      <Router history={history}>
        <PhotoProvider>
          <App />
        </PhotoProvider>
      </Router>
    );
  
    expect(appWrapper.find(TogglePhotoType)).toHaveLength(1);
  
    expect(appWrapper.find(CatsIndex)).toHaveLength(0);
    expect(appWrapper.find(CatShow)).toHaveLength(0);
    expect(appWrapper.find(CatForm)).toHaveLength(0);
    expect(appWrapper.find(PhotoShow)).toHaveLength(0);
  });
  
  test ('(1 points) CatShow should render at the path of "/cats/:catId"', () => {
    const history = createMemoryHistory();
    history.push('/cats/2');
    const appWrapper = mount(
      <Router history={history}>
        <PhotoProvider>
          <App />
        </PhotoProvider>
      </Router>
    );
  
    expect(appWrapper.find(CatShow)).toHaveLength(1);
    expect(appWrapper.find(CatsIndex)).toHaveLength(0);
    expect(appWrapper.find(CatForm)).toHaveLength(0);
    expect(appWrapper.find(PhotoShow)).toHaveLength(0);
    expect(appWrapper.find(TogglePhotoType)).toHaveLength(0);
  });
  
  test ('(1 points) "Page Not Found" should render at all other paths', () => {
    const history = createMemoryHistory();
    history.push('/blah');
    const appWrapper1 = mount(
      <Router history={history}>
        <PhotoProvider>
          <App />
        </PhotoProvider>
      </Router>
    );
    const regex = /page not found/i;
  
    expect(regex.test(appWrapper1.html())).toBe(true);
  
    expect(appWrapper1.find(CatsIndex)).toHaveLength(0);
    expect(appWrapper1.find(CatShow)).toHaveLength(0);
    expect(appWrapper1.find(CatForm)).toHaveLength(0);
    expect(appWrapper1.find(PhotoShow)).toHaveLength(0);
    expect(appWrapper1.find(TogglePhotoType)).toHaveLength(0);
  
    history.push('/random-unknown')
    const appWrapper2 = mount(
      <Router history={history}>
        <PhotoProvider>
          <App />
        </PhotoProvider>
      </Router>
    );
  
    expect(regex.test(appWrapper2.html())).toBe(true);
  });
});

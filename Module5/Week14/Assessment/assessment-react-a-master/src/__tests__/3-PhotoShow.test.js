import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import PhotoShow from '../components/PhotoShow';

jest.mock('react', () => ({
  ...jest.requireActual('react'), // use actual for all non-hook parts
  useContext: () => ({
    photoUrl: "/images/hello",
    photoType: "/hello",
    setPhotoType: () => {},
  })
}));

describe('(8 points) PhotoShow', () => {
  test ('(1 points) PhotoShow renders a div with a class of "photo-show"', () => {
    const catForm = shallow(
      <PhotoShow />
    );
  
    expect(catForm.is('div.photo-show')).toBe(true);
  });
  
  test ('(1 points) PhotoShow renders an h2 with the text "Photo Show"', () => {
    const catForm = shallow(
      <PhotoShow />
    );
  
    expect(catForm.find('h2').text()).toEqual("Photo Show");
    expect(catForm.find('h2').parent().is('div.photo-show')).toBe(true); 
  });
  
  test ('(5 points) PhotoShow renders an image of the context\'s photo type', () => {
    const catForm = shallow(
      <PhotoShow />
    );
  
    expect(catForm.find('img').props().src).toEqual("/images/hello");
  });
  
  test ('(1 points) PhotoShow is used by the App component', () => {
    const appWrapper = shallow(<App />);
    expect(appWrapper.find(PhotoShow)).toHaveLength(1);
  });
});


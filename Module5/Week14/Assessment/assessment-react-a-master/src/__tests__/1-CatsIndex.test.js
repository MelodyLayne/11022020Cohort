import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import CatsIndex from '../components/CatsIndex';
import cats from "../mockData/cats.json";

describe('(8 points) CatsIndex', () => {
  test ('(1 points) CatsIndex renders a div with a class of "cats-index"', () => {
    const catsIndex = shallow(
      <CatsIndex cats={cats}/>
    );
  
    expect(catsIndex.is('div.cats-index')).toBe(true);
  });
  
  test ('(1 points) CatsIndex renders an h2 with the text "Cats Index"', () => {
    const catsIndex = shallow(
      <CatsIndex cats={cats}/>
    );
  
    expect(catsIndex.find('h2').text()).toEqual("Cats Index");
    expect(catsIndex.find('h2').parent().is('div.cats-index')).toBe(true); 
  });
  
  test ('(5 points) CatsIndex renders a list of cats from the mockData', () => {
    const catsIndex = shallow(
      <CatsIndex cats={cats}/>
    );
  
    expect(catsIndex.find('Link')).toHaveLength(cats.length);
  
    cats.forEach((cat, idx) => {
      expect(catsIndex.find('Link').at(idx).text()).toEqual(cat.name);
      expect(catsIndex.find('Link').at(idx).props().to).toEqual(`/cats/${cat.id}`);
    });
  });
  
  test ('(1 points) CatsIndex is used by the App component', () => {
    const appWrapper = shallow(<App />);
    expect(appWrapper.find(CatsIndex)).toHaveLength(1);
  });
});


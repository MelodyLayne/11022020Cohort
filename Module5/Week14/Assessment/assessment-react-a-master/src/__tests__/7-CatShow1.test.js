import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import CatShow from '../components/CatShow';
import cats from "../mockData/cats.json";

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({ catId: "1" }),
  useRouteMatch: () => ({ url: `/cats/1` }),
}));

describe('(5 points) Route path: /cats/1', () => {
  test('(1 points) CatShow renders a div with a class of "cat-show"', () => {
    const catShow = shallow(
      <CatShow cats={cats}/>
    );

    expect(catShow.find('div.cat-show')).toHaveLength(1);
  });

  test('(1 points) CatShow renders an h2 with the name of the cat with id of 1', () => {
    const catShow = shallow(
      <CatShow cats={cats}/>
      );
      
    expect(catShow.find('h2').parent().is('div.cat-show')).toBe(true); 
    
    expect(catShow.find('h2').text()).toEqual("Fluffy");
  });

  test('(1 points) CatShow renders the color of the cat with id of 1', () => {
    const catShow = shallow(
      <CatShow cats={cats}/>
    );

    expect(catShow.contains("orange")).toBe(true);
    expect(catShow.contains("yellow")).toBe(false);
  });

  test('(1 points) CatShow renders the age of the cat with id of 1', () => {
    const catShow = shallow(
      <CatShow cats={cats}/>
    );

    expect(catShow.contains(2)).toBe(true);
  });

  test('(1 points) CatShow is used by the App component', () => {
    const appWrapper = shallow(<App />);
    expect(appWrapper.find(CatShow)).toHaveLength(1);
  });
});

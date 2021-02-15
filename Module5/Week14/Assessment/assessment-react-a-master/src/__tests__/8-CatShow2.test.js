import React from 'react';
import { shallow } from 'enzyme';

import CatShow from '../components/CatShow';
import cats from "../mockData/cats.json";

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({ catId: "2" }),
  useRouteMatch: () => ({ url: `/cats/2` }),
}));

describe('(3 points) Route path: /cats/2', () => {
  test('(1 points) CatShow renders an h2 with the name of the cat with id of 2', () => {
    const catShow = shallow(
      <CatShow cats={cats}/>
      );
      
    expect(catShow.find('h2').parent().is('div.cat-show')).toBe(true); 
    
    expect(catShow.find('h2').text()).toEqual("Queen");
  });

  test('(1 points) CatShow renders the color of the cat with id of 2', () => {
    const catShow = shallow(
      <CatShow cats={cats}/>
    );

    expect(catShow.contains("yellow")).toBe(true);
    expect(catShow.contains("orange")).toBe(false);
  });

  test('(1 points) CatShow renders the age of the cat with id of 2', () => {
    const catShow = shallow(
      <CatShow cats={cats}/>
    );

    expect(catShow.contains(14)).toBe(true);
  });
});
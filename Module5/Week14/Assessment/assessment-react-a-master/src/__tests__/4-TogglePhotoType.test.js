import React from 'react';
import { mount, shallow } from 'enzyme';

import App from '../App';
import TogglePhotoType from '../components/TogglePhotoType';
import PhotoProvider from '../context/PhotoContext';
import { useContext } from 'react';

const mockFn = jest.fn();

jest.mock('react', () => ({
  ...jest.requireActual('react'), // use actual for all non-hook parts
  useContext: jest.fn()
}));

describe('(7 points) TogglePhotoType', () => {
  test ('(1 points) TogglePhotoType renders a div with a class of "toggle-photo-type"', () => {
    useContext.mockImplementation(() => ({
      photoUrl: "/images/hello",
      photoType: "/hello",
      setPhotoType: mockFn,
    }));
    const toggle = mount(
      <PhotoProvider>
        <TogglePhotoType />
      </PhotoProvider>
    );
    
    expect(toggle.find('div.toggle-photo-type')).toHaveLength(1);
    expect(toggle.find('h2').text()).toEqual("Cat or Dog?");
    expect(toggle.find('h2').parent().is('div.toggle-photo-type')).toBe(true); 
  });
  
  test ('(3 points) TogglePhotoType changes the context\'s photo type to be "cat" or "dog"', () => {
    useContext.mockImplementation(() => ({
      photoUrl: "/images/hello",
      photoType: "/hello",
      setPhotoType: mockFn,
    }));
    const toggle = mount(
      <PhotoProvider>
        <TogglePhotoType />
      </PhotoProvider>
    );
    
    expect(toggle.find('div.toggle-photo-type')).toHaveLength(1);
    expect(toggle.find('h2').text()).toEqual("Cat or Dog?");
    expect(toggle.find('h2').parent().is('div.toggle-photo-type')).toBe(true);
  
    toggle.find('input[name="photoType"]').at(0).simulate('change', { target: { value: "cat" } });
    expect(mockFn.mock.calls[0][0]).toEqual("cat");
  
    toggle.find('input[name="photoType"]').at(1).simulate('change', { target: { value: "dog" } });
    expect(mockFn.mock.calls[1][0]).toEqual("dog");
  });

  test ('(1 points) TogglePhotoType cat radio button is checked when context\'s photoType is "cat"', () => {
    useContext.mockImplementation(() => ({
      photoUrl: "/cat",
      photoType: "cat",
      setPhotoType: mockFn,
    }));
    const toggle = mount(
      <PhotoProvider>
        <TogglePhotoType />
      </PhotoProvider>
    );
    
    expect(toggle.find('input[name="photoType"]').at(0).props().checked).toEqual(true);
    expect(toggle.find('input[name="photoType"]').at(1).props().checked).toEqual(false);
  });

  test ('(1 points) TogglePhotoType dog radio button is checked when context\'s photoType is "dog"', () => {
    useContext.mockImplementation(() => ({
      photoUrl: "/dog",
      photoType: "dog",
      setPhotoType: mockFn,
    }));
    const toggle = mount(
      <PhotoProvider>
        <TogglePhotoType />
      </PhotoProvider>
    );
    
    expect(toggle.find('input[name="photoType"]').at(0).props().checked).toEqual(false);
    expect(toggle.find('input[name="photoType"]').at(1).props().checked).toEqual(true);
  });
  
  test ('(1 points) TogglePhotoType is used by the App component', () => {
    const appWrapper = shallow(<App />);
    expect(appWrapper.find(TogglePhotoType)).toHaveLength(1);
  });
});


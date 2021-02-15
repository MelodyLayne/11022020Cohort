import React from 'react';
import { shallow, mount } from 'enzyme';

import App from '../App';
import CatForm from '../components/CatForm';

import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

const consoleSpy = jest.spyOn(global.console, 'log').mockImplementation();

describe('(15 points) CatForm', () => {
  test ('(1 points) CatForm renders a form with a class of "cat-form"', () => {
    const catForm = shallow(
      <CatForm />
    );
  
    expect(catForm.is('form.cat-form')).toBe(true);
    expect(catForm.find('h2').text().toLowerCase()).toEqual("create a cat");
    expect(catForm.find('h2').parent().is('form.cat-form')).toBe(true); 
  });
  
  test ('(2 points) CatForm has a controlled input for the name field', () => {
    const catForm = shallow(
      <CatForm />
    );
  
    expect(catForm.find('input[name="name"]').props().value).toEqual("");
    catForm.find('input[name="name"]').simulate('change', { target: { value: "Chloe" } });
    expect(catForm.find('input[name="name"]').props().value).toEqual("Chloe");
  });
  
  test ('(2 points) CatForm has a controlled input for the age field', () => {
    const catForm = shallow(
      <CatForm />
    );
  
    expect(catForm.find('input[name="age"]').props().value).toEqual(0);
    catForm.find('input[name="age"]').simulate('change', { target: { value: "7" } });
    expect(catForm.find('input[name="age"]').props().value).toEqual("7");
  });
  
  test ('(2 points) CatForm has a controlled input for the color dropdown', () => {
    const catForm = shallow(
      <CatForm />
    );
  
    expect(catForm.find('select').props().value).toEqual("orange");
    catForm.find('select').simulate('change', { target: { value: "brown" } });
    expect(catForm.find('select').props().value).toEqual("brown");
  });
  
  test ('(1 points) CatForm shows an error in "ul.errors" if name is not filled in', () => {
    const catForm = mount(
      <CatForm />
    );
  
    expect(catForm.find('input[name="name"]').props().value).toEqual("");
    expect(catForm.find('ul.errors').children()).toHaveLength(1);
  });
  
  test ('(1 points) CatForm shows an error in "ul.errors" if name more than 30 characters', () => {
    const catForm = mount(
      <CatForm />
    );
  
    expect(catForm.find('input[name="name"]').props().value).toEqual("");
    catForm.find('input[name="name"]').simulate('change', { target: { value: "This is exactly 31 characters!!" } });
    expect(catForm.find('ul.errors').children()).toHaveLength(1);
  });
  
  test ('(1 points) CatForm does not show any errors in "ul.errors" if name filled in', () => {
    const catForm = mount(
      <CatForm />
    );
  
    expect(catForm.find('input[name="name"]').props().value).toEqual("");
    catForm.find('input[name="name"]').simulate('change', { target: { value: "Chloe" } });
    expect(catForm.find('ul.errors').children()).toHaveLength(0);
  });
  
  test ('(1 points) CatForm shows an error in "ul.errors" if age is less than 0', () => {
    const catForm = mount(
      <CatForm />
    );
  
    expect(catForm.find('input[name="name"]').props().value).toEqual("");
    expect(catForm.find('input[name="age"]').props().value).toEqual(0);
    catForm.find('input[name="age"]').simulate('change', { target: { value: "-1" } });
    expect(catForm.find('ul.errors').children()).toHaveLength(2);
  });
  
  test ('(1 points) CatForm shows an error in "ul.errors" if age is greater than 30', () => {
    const catForm = mount(
      <CatForm />
    );
  
    expect(catForm.find('input[name="name"]').props().value).toEqual("");
    expect(catForm.find('input[name="age"]').props().value).toEqual(0);
    catForm.find('input[name="age"]').simulate('change', { target: { value: "31" } });
    expect(catForm.find('ul.errors').children()).toHaveLength(2);
  });
  
  test ('(1 points) CatForm is used by the App component', () => {
    const appWrapper = shallow(<App />);
    expect(appWrapper.find(CatForm)).toHaveLength(1);
  });
  
  test ('(1 points) CatForm disables the button when there are errors', () => {
    const catForm = mount(
      <CatForm />
    );
  
    expect(catForm.find('input[name="name"]').props().value).toEqual("");
    expect(catForm.find('ul.errors').children()).toHaveLength(1);
    expect(catForm.find('button').props().disabled).toBe(true);
    catForm.find('input[name="name"]').simulate('change', { target: { value: "Chloe" } });
    expect(catForm.find('input[name="name"]').props().value).toEqual("Chloe");
    expect(catForm.find('ul.errors').children()).toHaveLength(0);
    expect(catForm.find('button').props().disabled).toBe(false);
  });
  
  test ('(1 points) CatForm prints the form values and redirects to "/" when submitted', () => {
    const history = createMemoryHistory();
    history.push('/cats/new');
    const catForm = mount(
      <Router history={history}>
        <App />
      </Router>
    );
  
    expect(history.location.pathname).toBe("/cats/new");
    catForm.find('input[name="name"]').simulate('change', { target: { value: "Chloe" } });
    catForm.find('input[name="age"]').simulate('change', { target: { value: "7" } });
    catForm.find('select').simulate('change', { target: { value: "brown" } });
    expect(catForm.find('ul.errors').children()).toHaveLength(0);
    expect(catForm.find('button').props().disabled).toBe(false);
    catForm.find('form').simulate('submit', { preventDefault: () => {} });
    expect(history.location.pathname).toBe("/");
    expect(consoleSpy.mock.calls[0][0]).toEqual({ name: "Chloe", age: "7", color: "brown" });
  });
})


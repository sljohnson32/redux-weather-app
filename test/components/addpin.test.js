import React from 'react';
import { shallow, mount } from 'enzyme';
import AddPin from '../../src/components/AddPin';
const { splitLocation, filterData } = require('../Helpers/ForecastHelpers');

const setup = () => {
  const props = {
    handleClick: jest.fn(),
  }
  const wrapper = mount(
    <AddPin handleClick={props.getForecast}/>
  )

  const Component = wrapper.find(AddPin)

  return {
    props,
    Component
  }
}

describe('AddPin', () => {

  it('should render something', () => {
    const { Component } = setup();
    expect(Component.find('input')).toEqual(1);
  });

  // it('should render an input field', () => {
  //   const { Component } = setup();
  //   expect(Component.find(input)).toEqual(1);
  // });

  it('should simulate a button click', () => {
    const wrapper = shallow(<div onButtonClick={onButtonClick} />);
    wrapper.find('button').simulate('click');
    expect(onButtonClick.calledOnce).toEqual(true);
  })
})

import React from 'react';
import { shallow } from 'enzyme';
import AddPin from '../../src/components/AddPin';
const { splitLocation, filterData } = require('../Helpers/ForecastHelpers');

describe('AddPin', () => {
  it('should render an input field', () => {
    const wrapper = shallow(<AddPin />);
    expect(wrapper.find(input)).toEqual(1);
  });

  it('should simulate a button click', () => {
    const wrapper = shallow(<div onButtonClick={onButtonClick} />);
    wrapper.find('button').simulate('click');
    expect(onButtonClick.calledOnce).toEqual(true);
  })
})

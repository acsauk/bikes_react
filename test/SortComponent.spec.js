import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import Dropdown from 'muicss/lib/react/dropdown';

import SortComponent from '../lib/SortComponent';

let bikeClasses;
let wrapper;

describe('<SortComponent />', function() {
  beforeEach(function() {
    wrapper = mount(<SortComponent bikeClasses={["endurance","race","comfort"]} />)
  })

  // Doesn't currently test for populated items as struggling with testing muicss components

  it('renders a dropdown box populated with bike classes', function() {
    let dropdown = wrapper.find('.mui-dropdown')
    expect(wrapper.props().bikeClasses).to.be.instanceof(Array);
    expect(wrapper.props().bikeClasses.length).to.equal(3);
    expect(dropdown.type()).to.equal('div');
  });

  // Ran out of time to test for sorting functionality

});

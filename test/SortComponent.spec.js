import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import Dropdown from 'muicss/lib/react/dropdown';

import SortComponent from '../lib/SortComponent';

let bikeClasses;
let wrapper;

describe('<FilterComponent />', function() {
  beforeEach(function() {
    bikeClasses = ["endurance","race","comfort"]
    wrapper = mount(<SortComponent/>)
  })

  it('renders a dropdown box initially not populated', function() {
    let dropdown = wrapper.find('.mui-dropdown')
    expect(wrapper.state().bikeClasses).to.be.instanceof(Array);
    expect(wrapper.state().bikeClasses.length).to.equal(0);
    expect(dropdown.type()).to.equal('div');
  });
});

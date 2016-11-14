import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import SortComponent from '../lib/SortComponent';

let bikeClasses;
let wrapper;

describe('<FilterComponent />', function() {
  beforeEach(function() {
    bikeClasses = ["endurance","race","comfort"]

    wrapper = mount(<SortComponent/>)
  })

  it('renders a dropdown box initially not populated', function() {
    expect(wrapper.state().bikeClasses).to.be.instanceof(Array);
    expect(wrapper.state().bikesList.length).to.equal(0);
    expect(wrapper.html()).to.equal(null);
  });
});

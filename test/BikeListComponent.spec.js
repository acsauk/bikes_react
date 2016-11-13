import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import BikeListComponent from '../lib/BikeListComponent';

describe('<BikeListComponent/>', function() {

  const wrapper = mount(<BikeListComponent/>);

  it('renders null initially and state contains an empty array in bikesList', function() {
    expect(wrapper.state().bikesList).to.be.instanceof(Array);
    expect(wrapper.state().bikesList.length).to.equal(0);
    expect(wrapper.html()).to.equal(null);
  });
});

import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import BikeListComponent from '../lib/BikeListComponent';
import BikeComponent from '../lib/BikeComponent';

describe('<BikeListComponent/>', function() {

  it('renders null initially and state contains an empty array in bikesList', function() {
    const wrapper = mount(<BikeListComponent/>);

    expect(wrapper.state().bikesList).to.be.instanceof(Array);
    expect(wrapper.state().bikesList.length).to.equal(0);
    expect(wrapper.html()).to.equal(null);
  });

  it('Renders a div that contains a BikeComponent and stores the props values correctly', function() {

    const wrapper = mount(<BikeListComponent/>);

    wrapper.setState({
      bikesList: [
        {
          bikeName: 'Litening C:68',
          bikeDescription: 'The bike for the professionals - thanks to our high-end C:68 Carbon frame and race optimized geometry.'
        }
      ]
    });

    expect(wrapper.state().bikesList).to.be.instanceof(Array);
    expect(wrapper.state().bikesList.length).to.equal(1);
    expect(wrapper.find('.bikes-list')).to.have.length(1);

    let bikeComponent = wrapper.childAt(0);
    let bikeComponentProps = bikeComponent.props();

    expect(bikeComponent.type()).to.equal(BikeComponent);
    expect(bikeComponentProps.bikeName).to.equal('Litening C:68');
    expect(bikeComponentProps.bikeDescription).to.equal('The bike for the professionals - thanks to our high-end C:68 Carbon frame and race optimized geometry.');
  });
});

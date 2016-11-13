import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import BikeListComponent from '../lib/BikeListComponent';
import BikeComponent from '../lib/BikeComponent';

let wrapper;

describe('<BikeListComponent/>', function() {
  beforeEach(function() {
    wrapper = mount(<BikeListComponent/>);
  });

  it('renders null initially and state contains an empty array in bikesList', function() {
    expect(wrapper.state().bikesList).to.be.instanceof(Array);
    expect(wrapper.state().bikesList.length).to.equal(0);
    expect(wrapper.html()).to.equal(null);
  });

  it('Renders a div that contains a BikeComponent and calls _constructBikeList', function() {
    sinon.spy(BikeListComponent.prototype, '_constructBikeList');

    wrapper.setState({
      bikesList: [
        {
          bikeName: 'Litening C:68',
          bikeDescription: 'The bike for the professionals - thanks to our high-end C:68 Carbon frame and race optimized geometry.'
        }
      ]
    });

    expect(wrapper.find('.bikes-list')).to.have.length(1);
    expect(BikeListComponent.prototype._constructBikeList.calledOnce).to.equal(true);
  });

  it('_constructBikesList works correctly and can handle multiple bikeComponent objects', function() {
    wrapper.setState({
      bikesList: [
        {
          bikeName: 'Litening C:68',
          bikeDescription: 'The bike for the professionals - thanks to our high-end C:68 Carbon frame and race optimized geometry.'
        },
        {
          bikeName: 'Litening C:62',
          bikeDescription: 'A lightweight, dream bike for ambitious cyclists with a high-quality C:62 carbon frame.'
        }
      ]
    });
    const result = wrapper.instance()._constructBikeList();
    expect(result).to.be.instanceof(Array);
    expect(result.length).to.equal(2);
    expect(mount(result[0]).type()).to.equal(BikeComponent);
    expect(result[0].props.bikeName).to.equal('Litening C:68');
    expect(result[0].props.bikeDescription).to.equal('The bike for the professionals - thanks to our high-end C:68 Carbon frame and race optimized geometry.');
    expect(mount(result[1]).type()).to.equal(BikeComponent);
    expect(result[1].props.bikeName).to.equal('Litening C:62');
    expect(result[1].props.bikeDescription).to.equal('A lightweight, dream bike for ambitious cyclists with a high-quality C:62 carbon frame.');
  });
});

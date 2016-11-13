import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import BikeComponent from '../lib/BikeComponent';

describe('<BikeComponent/>', function () {
  it('should display a bike name and description wrapped in paragraphs in a parent div', function() {
    const wrapper = shallow(<BikeComponent
                              bikeName={ 'Litening C:68' }
                              bikeDescription={ 'The bike for the professionals - thanks to our high-end C:68 Carbon frame and race optimized geometry.' } />);
    expect(wrapper.type()).to.equal('div');
    expect(wrapper.hasClass('bike')).to.equal(true);

    let nameP = wrapper.childAt(0);
    expect(nameP.type()).to.equal('p');
    expect(nameP.hasClass('bikeName')).to.equal(true);
    expect(nameP.text()).to.equal('Model: Litening C:68');

    let descriptionP = wrapper.childAt(1);
    expect(descriptionP.type()).to.equal('p');
    expect(descriptionP.hasClass('bikeDescription')).to.equal(true);
    expect(descriptionP.text()).to.equal('Description: The bike for the professionals - thanks to our high-end C:68 Carbon frame and race optimized geometry.');
  });
});

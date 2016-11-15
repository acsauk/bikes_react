import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

import BikeComponent from '../lib/BikeComponent';

let wrapper;

describe('<BikeComponent/>', function () {
  beforeEach(function() {
    wrapper = shallow(<BikeComponent
                              bikeId={ 1 }
                              bikeName={ 'Litening C:68' }
                              bikeDescription={ 'The bike for the professionals - thanks to our high-end C:68 Carbon frame and race optimized geometry.' }
                              bikeClasses={ ["endurance", "race"] }
                              bikeImage={ "https://www.cube.eu/typo3temp/_processed_/csm_780500_overview_35318ff11c.png" }
                              />);
  });

  it('should display a bike name and description wrapped in paragraphs in a Container', function() {
    expect(wrapper.type()).to.equal(Container);

    let nameP = wrapper.find('h3.bikeName');
    expect(nameP.type()).to.equal('h3');
    expect(nameP.hasClass('bikeName')).to.equal(true);
    expect(nameP.text()).to.equal('Model: Litening C:68');

    let descriptionP = wrapper.find('p.bikeDescription');
    expect(descriptionP.type()).to.equal('p');
    expect(descriptionP.hasClass('bikeDescription')).to.equal(true);
    expect(descriptionP.text()).to.equal('The bike for the professionals - thanks to our high-end C:68 Carbon frame and race optimized geometry.');
  });

  it('displays the bike classes associated with the bike in a ul tag', function() {
    let classUl = wrapper.find('ul.bikeClass');
    expect(classUl.type()).to.equal('ul');
    expect(classUl.hasClass('bikeClass')).to.equal(true);
    expect(classUl.find('ul').children()).to.have.length(2);
    expect(classUl.find('ul').childAt(0).text()).to.equal('endurance ')
    expect(classUl.find('ul').childAt(1).text()).to.equal('race ')
  });

  it('displays the bike image associated with the bike in an img tag', function() {
    let imageImg = wrapper.find('img.bikeImage'); 
    let image = imageImg.find('img');
    expect(imageImg.type()).to.equal('img');
    expect(imageImg.hasClass('bikeImage')).to.equal(true);
  });
});

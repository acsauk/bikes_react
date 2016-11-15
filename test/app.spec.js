import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';
import nock from 'nock';

import App from '../lib/app';

let wrapper;
let bikesResponse;

describe('<App/>', function() {
  beforeEach(function() {
    bikesResponse = [
  { id: 1,
    name: 'Litening C:68',
    description: 'The bike for the professionals - thanks to our high-end C:68 Carbon frame and race optimized geometry.',
    image:
     { thumb: 'https://www.cube.eu/typo3temp/_processed_/csm_780500_overview_35318ff11c.png',
       large: 'https://www.cube.eu/typo3temp/_processed_/csm_780500_light_f65dc1ec5c.jpg' },
    class: [ 'endurance', 'race' ] },
  { id: 2,
    name: 'Litening C:62',
    description: 'A lightweight, dream bike for ambitious cyclists with a high-quality C:62 carbon frame.',
    image:
     { thumb: 'https://www.cube.eu/typo3temp/_processed_/csm_779200_overview_4b6834c6f9.png',
       large: 'https://www.cube.eu/typo3temp/_processed_/csm_779200_light_a2e6307919.jpg' },
    class: [ 'endurance', 'race' ] },
  { id: 3,
    name: 'Agree C:62',
    description: 'With this bike, there are no compromises: C:62 Carbon frame, disc brakes and maximum aerodynamics it\'s ready for racing.',
    image:
     { thumb: 'https://www.cube.eu/typo3temp/_processed_/csm_778500_overview_b9d262b44f.png',
       large: 'https://www.cube.eu/typo3temp/_processed_/csm_778500_light_412d6bd75b.jpg' },
    class: [ 'comfort', 'endurance', 'race' ] },
  { id: 4,
    name: 'Attain GTC',
    description: 'Comformatable on tours, lightweight carbon fiber frame and with the option of discs make a great all rounder.',
    image:
     { thumb: 'https://www.cube.eu/typo3temp/_processed_/csm_777400_overview_2bd8be2893.png',
       large: 'https://www.cube.eu/typo3temp/_processed_/csm_777400_light_112280f0d8.jpg' },
    class: [ 'comfort', 'endurance' ] },
  { id: 5,
    name: 'Attain HPA',
    description: 'A high-quality aluminum frame for long tours with high comfort levels, ergonomically balanced and complete with a disc option.',
    image:
     { thumb: 'https://www.cube.eu/typo3temp/_processed_/csm_776402_overview_afcdd3c64e.png',
       large: 'https://www.cube.eu/typo3temp/_processed_/csm_776402_light_24eb7350fe.jpg' },
    class: [ 'comfort', 'endurance' ] },
  { id: 6,
    name: 'Cross Race',
    description: 'Reliable through mud, wind and the harshest conditions even when racing.',
    image:
     { thumb: 'https://www.cube.eu/typo3temp/_processed_/csm_788400_overview_dbfa9bc7e6.png',
       large: 'https://www.cube.eu/typo3temp/_processed_/csm_788400_light_464e99b256.jpg' },
    class: [ 'endurance', 'race' ] },
  { id: 7,
    name: 'SL Road',
    description: 'With the SL road, it\'s quick and comfortable to work and you can even do a relaxing after work ride.',
    image:
     { thumb: 'https://www.cube.eu/typo3temp/_processed_/csm_750000_overview_d44dd92097.png',
       large: 'https://www.cube.eu/typo3temp/_processed_/csm_750000_light_b752848746.jpg' },
    class: [ 'comfort' ] } ]
  });

  it('Updates state with bike info after making AJAX call to server', function(done) {
    wrapper = mount(<App />);
    nock('https://api.myjson.com')
      .get('/bins/1c104')
      .reply(200, bikesResponse);
    setTimeout(function() {
      expect(wrapper.state().bikeList).to.be.instanceof(Array);
      expect(wrapper.state().bikeList.length).to.equal(7);
      expect(wrapper.state().bikeList[0].name).to.equal("Litening C:68");
      expect(wrapper.state().bikeList[0].description).to.equal("The bike for the professionals - thanks to our high-end C:68 Carbon frame and race optimized geometry.");
      nock.cleanAll();
      done();
    }, 1500);
  });

});

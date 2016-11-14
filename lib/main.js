import React from 'react';
import {render} from 'react-dom';
import BikeComponent from './BikeComponent';
import BikeListComponent from './BikeListComponent';

const app = document.getElementById('root');

render(<BikeListComponent/>, app);

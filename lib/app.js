import React from 'react';
import {render} from 'react-dom';
import BikeListComponent from './BikeListComponent';
import SortComponent from './SortComponent';
import request from 'superagent'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bikesList: [],
      bikeClasses: []
    };
  }

  componentDidMount() {
    request
      .get('https://api.myjson.com/bins/1c104')
      .end((error, response) => {
        if (!error && response) {
          this.setState({
            bikesList: response.body.items
          });
        } else {
          console.log('There was an error fetching from the JSON location', error);
        }
    });
  }

  render(){
    return(
      <div>
        <BikeListComponent bikesList={this.state.bikesList}/>
        <SortComponent/>
      </div>
    );
  }

};

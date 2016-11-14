import React, {PropTypes} from 'react';
import BikeComponent from './BikeComponent';
import request from 'superagent'

export default class BikeListComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bikesList: []
    };
  }

  render() {
    if (!this.state.bikesList.length) {
      return null;
    }

    return (
      <div className="bikes-list">
        <h2>Bikes</h2>
        { this._constructBikeList() }
      </div>
    )
  }

  _constructBikeList() {
    return this.state.bikesList.map((bike, index) => {
      console.log(bike)
      return (
        <BikeComponent
          key={ index }
          bikeName={ bike.bikeName }
          bikeDescription={ bike.bikeDescription } />
      );
    });
  }

  componentDidMount() {
    request
      .get('http://www.mocky.io/v2/577fb8a1100000c80762fcb3')
      .end((error, response) => {
        if (!error && response) {
          this.setState({
            bikesList: response.body
          });
        } else {
          console.log('There was an error fetching from the JSON location', error);
        }
    });
  }
}

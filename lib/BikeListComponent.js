import React, {PropTypes} from 'react';
import BikeComponent from './BikeComponent';

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
        { this._constructBikeList() }
      </div>
    )
  }

  _constructBikeList() {
    return this.state.bikesList.map((bike, index) => {
      return (
        <BikeComponent
          key={ index }
          bikeName={ bike.bikeName }
          bikeDescription={ bike.bikeDescription } />
      );
    });
  }
}

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
    if (!this.props.bikesList.length) {
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
    return this.props.bikesList.map((bike) => {
      return (
        <BikeComponent
          key={ bike.id }
          bikeId={ bike.id }
          bikeName={ bike.name }
          bikeDescription={ bike.description }
          bikeClasses={ bike.class }
          bikeImage={ bike.image }/>
      );
    });
  }

}

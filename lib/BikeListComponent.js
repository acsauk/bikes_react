import React, {PropTypes} from 'react';
import BikeComponent from './BikeComponent';

export default class BikeListComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.bikeList ?
      (<div className="bikes-list">
        <h2>Bikes</h2>
        { this._constructBikeList() }
      </div>)
    : null;
  }

  _constructBikeList() {
    return this.props.bikeList.map((bike) => {
      return (
        <BikeComponent
          key={ bike.id }
          bikeId={ bike.id }
          bikeName={ bike.name }
          bikeDescription={ bike.description }
          bikeClasses={ bike.class }
          bikeImage={ bike.image }
        />
      );
    });
  }

}

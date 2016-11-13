import React, {PropTypes} from 'react';

export default class BikeComponent extends React.Component {
  render() {
    return (
      <div className="bike">
        <p className="bikeName">Model: { this.props.bikeName }</p>
        <p className="bikeDescription">Description: { this.props.bikeDescription }</p>
      </div>
    );
  }
}

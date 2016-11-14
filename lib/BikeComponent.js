import React, {PropTypes} from 'react';

export default class BikeComponent extends React.Component {

  _extractBikeClasses(classes) {
    return classes.map(function(e, index) {
      return (
        <li key={index}>{ e + " " }</li>

      );
    });
  }

  render() {
    return (
      <div key={this.props.bikeId} className="bike">
        <p className="bikeName">Model: { this.props.bikeName }</p>
        <p className="bikeDescription">Description: { this.props.bikeDescription }</p>
        <p>Classes:</p>
        <ul className="bikeClass">{ this._extractBikeClasses(this.props.bikeClasses) }</ul>
      </div>
    );
  }
}

import React, {PropTypes} from 'react';

export default class BikeComponent extends React.Component {
  render() {
    return (
      <div className="bike">
        <p className="bikeName">Model: Litening C:68</p>
        <p className="bikeDescription">Description: The bike for the professionals - thanks to our high-end C:68 Carbon frame and race optimized geometry.</p>
      </div>
    );
  }
}

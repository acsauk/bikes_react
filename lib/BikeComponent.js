import React, {PropTypes} from 'react';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

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
      <Container>
        <Row>
          <Col md="12">
            <div key={this.props.bikeId} className="bike">
              <h3 className="bikeName">Model: { this.props.bikeName }</h3>
              <img className="bikeImage" src={ this.props.bikeImage.thumb}></img>
            </div>
          </Col>
        <Col md="6">
          <p className="bikeDescription">{ this.props.bikeDescription }</p>
        </Col>
        <Col md="6">
          <ul className="bikeClass">{ this._extractBikeClasses(this.props.bikeClasses) }</ul>
        </Col>
        </Row>
      </Container>

    );
  }
}

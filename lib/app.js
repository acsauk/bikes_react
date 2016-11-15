import React from 'react';
import {render} from 'react-dom';
import BikeListComponent from './BikeListComponent';
import SortComponent from './SortComponent';
import request from 'superagent'
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bikeList: [],
      bikeClasses: ["Endurance", "Race", "Comfort" ]
    };
  }

  componentDidMount() {
    request
      .get('https://api.myjson.com/bins/1c104')
      .end((error, response) => {
        if (!error && response) {
          this.setState({
            bikeList: response.body.items
          });
        } else {
          console.log('There was an error fetching from the JSON location', error);
        }
    });
  }

  addSortedBikesToDisplay(sortedBikes){
    this.setState({
      bikeList: sortedBikes
    })
  }

  render(){
    return(
      <Container>
        <Row>
          <Col md="12">
          <BikeListComponent bikeList={this.state.bikeList}/>
          <SortComponent bikeClasses={this.state.bikeClasses}
                         bikeList={this.state.bikeList}
                         addSortedBikesToDisplay={this.addSortedBikesToDisplay}/>
          </Col>
        </Row>
      </Container>
    );
  }

};

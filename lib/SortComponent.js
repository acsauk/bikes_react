import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Button from 'muicss/lib/react/button';
import Dropdown from 'muicss/lib/react/dropdown';
import DropdownItem from 'muicss/lib/react/dropdown-item';

export default class SortComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sortedBikes: [],
      value: ""
    };
  }

  change(event){
    this.setState({
      value: event.target.value
    });
  }

  createDropdownItems() {
    let items = [];
    for (let i = 0; i <= this.props.bikeClasses.length; i++) {
      var item = this.props.bikeClasses[i];
      items.push(<DropdownItem key={i} onClick={this.sortByBikeClass} ref="class">{item}</DropdownItem>);
    }
    return items;
  }

  sortByBikeClass() {
    var newAry = []
    this.props.bikeList.forEach(function(element) {
      if (element.class.includes(this.state.value)) {
        newAry.unshift(element);
      } else {
        newAry.push(element);
      }
      this.props.addSortedBikesToDisplay(newAry)
      newAry = [];
    });
  }

  render() {
    return(
      <div>
        <Dropdown label="Bike Classes" onChange={this.change.bind(this)} value={this.state.value}>
          { this.createDropdownItems() }
        </Dropdown>
        <Button onClick={this.sortByBikeClass}>Sort Bikes</Button>
      </div>
    );
  }
}

import React, {PropTypes} from 'react';
import Dropdown from 'muicss/lib/react/dropdown';
import DropdownItem from 'muicss/lib/react/dropdown-item';

export default class SortComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  createDropdownItems() {
    let items = [];
    for (let i = 0; i <= this.props.bikeClasses.length; i++) {
      var item = this.props.bikeClasses[i];
      items.push(<DropdownItem key={i}>{item}</DropdownItem>);
    }
    return items;
  }

  onSelectedDropDownItem(item) {
    console.log("The value", item.target.value);
  }

  render() {

    return(
      <div>
        <Dropdown onChange={ this.onSelectedDropDownItem } label="Bike Classes">
          { this.createDropdownItems() }
        </Dropdown>
      </div>
    );
  }
}

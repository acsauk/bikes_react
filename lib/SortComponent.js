import React, {PropTypes} from 'react';
import Dropdown from 'muicss/lib/react/dropdown';
import DropdownItem from 'muicss/lib/react/dropdown-item';

export default class SortComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bikeClasses: []
    };
  }

  render() {
    return(
      <div>
        <Dropdown color="primary" label="Bike Classes">
          <DropdownItem>Test</DropdownItem>
        </Dropdown>
      </div>
    );
  }
}

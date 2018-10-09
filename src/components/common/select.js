import SweetAlert from 'sweetalert-react';
import React, {Component} from 'react';
import Select from 'react-select';

const options = [
  { value: 'june', label: 'JUNE' },
  { value: 'july', label: 'JULY' },
];

  class SelectionModel extends Component {

constructor(props){
  super(props);
  this.state = {
    selectedOption:null
  }
}


handleChange = (selectedOption) => {
  this.setState({ selectedOption });
this.props.item_selected(selectedOption.value);
}

  render() {
    return (
      <Select
      value={this.state.selectedOption}
      onChange={this.handleChange}
      options={options}
    />)
  }


}

export default SelectionModel;

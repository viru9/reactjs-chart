import React, {Component} from 'react';
import {connect} from 'react-redux';
import MyLineChart from './common/line_chart';
import SelectionModel from './common/select';
import {Row,Col} from 'reactstrap';
import {searchValue} from '../actions/home'


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }

  itemSelected(val) {
    this.props.searchValue(val, (res) => {
      this.setState({data:res})
    });
  }


  render() {
    return (
      <div>
            <Row>
               <Col xs="6" sm="4"></Col>
               <Col xs="6" sm="4"><SelectionModel item_selected={this.itemSelected.bind(this)}/></Col>
               <Col sm="4"></Col>
             </Row>
             <Row>
              <Col xs="2" sm="2"></Col>
              <Col xs="10" sm="10">{this.state.data && <MyLineChart data={this.state.data}/>}</Col>
            </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {home: state};
}

export default connect(mapStateToProps, {searchValue})(Home);

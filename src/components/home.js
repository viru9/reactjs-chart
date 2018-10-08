import React, {Component} from 'react';
import {connect} from 'react-redux';
import MyLineChart from './common/line_chart';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show_alert: false
    }
  }

  buttonClicked() {
    this.setState({show_alert: true});
  }


  render() {
    return (
      <div>
        <MyLineChart/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {home: state};
}

export default connect(mapStateToProps, {})(Home);

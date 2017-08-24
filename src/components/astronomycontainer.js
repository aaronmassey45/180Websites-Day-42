import React, {Component} from 'react';
import {connect} from 'react-redux';
import AstronomyCard from './astronomycard';
import fetchData from '../actions/index'

class AstronomyContainer extends Component {
  componentDidMount() {
    this.props.fetchData();
  }
  render() {

    return (
      <div className="AstronomyContainer">
        <AstronomyCard data={this.props.astronomy} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { astronomy: state.astronomy }
}

export default connect(mapStateToProps, {fetchData})(AstronomyContainer);

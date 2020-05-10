import React, {Component} from 'react';
import './App.css';
import {getData} from '../actions/shared';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getData());
  }
  render() {
    return <div className='App'></div>;
  }
}
App.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(App);

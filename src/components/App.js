import React, {Component} from 'react';
import './App.css';
import {getData} from '../actions/shared';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Header from './Header';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home';
import NewPoll from './NewPoll';
import Leaderboard from './LeaderBoard';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getData());
  }
  render() {
    return (
      <div className='App'>
        <Router>
          <>
            <Header />
            <Route exact path='/' component={Home} />
            <Route path='/add'>
              <NewPoll />
            </Route>
            <Route path='/leaderboard'>
              <Leaderboard />
            </Route>
          </>
        </Router>
      </div>
    );
  }
}
App.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(App);

import React, {Component} from 'react';

import {getData} from '../actions/shared';

import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Header from './Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import NewPoll from './NewPoll';
import Leaderboard from './LeaderBoard';
import Login from './Login';
import PollPage from './PollPage';
import {Page404} from './Page404';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getData());
  }
  render() {
    return (
      <div className='App'>
        {this.props.authedUser ? (
          <Router>
            <Header authedUser={this.props.authedUser} />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/add' component={NewPoll} />
              <Route path='/leaderboard'>
                <Leaderboard />
              </Route>
              <Route path='/question/:id' component={PollPage} />
              <Route component={Page404} />
            </Switch>
          </Router>
        ) : (
          <Login />
        )}
      </div>
    );
  }
}
App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  authedUser: PropTypes.string
};

function mapStateToProps({authedUser}) {
  return {authedUser};
}

export default connect(mapStateToProps)(App);

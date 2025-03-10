import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {pick} from 'ramda';
import {map} from 'lodash';
import {logIn} from '../actions/authedUser';

class Login extends Component {
  state = {
    user: ''
  };
  handleChange = e => this.setState({user: e.target.value});
  render() {
    return (
      <div className='loginScreen'>
        <h2>Please log in</h2>
        <form
          onSubmit={e => {
            this.props.logIn(this.state.user);
            e.preventDefault();
          }}
        >
          <select value={this.state.user} onChange={this.handleChange}>
            <option value='' disabled>
              Please select your user name...
            </option>
            {this.props.users.map(({name, id}) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </select>
          <button className='button' disabled={!this.state.user}>
            Log in
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  logIn: PropTypes.func.isRequired
};
function mapStateToProps({users}) {
  return {
    users: map(users, pick(['id', 'name']))
  };
}

const mapDispatchToProps = {
  logIn
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

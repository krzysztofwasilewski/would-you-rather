import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {map, partialRight, pick} from 'lodash';
import {logIn} from '../actions/authedUser';

class Login extends Component {
  state = {
    user: ''
  };
  handleChange = e => this.setState({user: e.target.value});
  render() {
    return (
      <div>
        <h2>Please log in</h2>
        <form
          onSubmit={e => {
            this.props.logIn(this.state.user);
            e.preventDefault();
          }}
        >
          <select value={this.state.user} onChange={this.handleChange}>
            {this.props.users.map(({name, id}) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </select>
          <button>Log in</button>
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
  const picker = partialRight(pick, ['id', 'name']);
  return {
    users: map(users, picker)
  };
}

const mapDispatchToProps = {
  logIn
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

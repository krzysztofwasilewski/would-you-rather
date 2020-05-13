import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {handleAddQuestion} from '../actions/questions';
import {values, isEmpty, pipe, any} from 'ramda';

class NewPoll extends Component {
  state = {optionOneText: '', optionTwoText: ''};
  handleTextChange = option => e => {
    const val = e.target.value;
    e.preventDefault();
    this.setState({[option]: val});
  };
  handleSubmitForm = e => {
    e.preventDefault();
    this.props.handleAddQuestion({
      author: this.props.authedUser,
      ...this.state
    });
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmitForm}>
          <fieldset>
            <legend>Would you rather:</legend>
            <ul>
              <li>
                <input
                  type='text'
                  autoFocus
                  value={this.state.optionOneText}
                  onChange={this.handleTextChange('optionOneText')}
                />
              </li>
              <li>
                <input
                  type='text'
                  value={this.state.optionTwoText}
                  onChange={this.handleTextChange('optionTwoText')}
                />
              </li>
            </ul>
            <button disabled={pipe(values, any(isEmpty))(this.state)}>
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

NewPoll.propTypes = {
  authedUser: PropTypes.string.isRequired,
  handleAddQuestion: PropTypes.func.isRequired,
  history: PropTypes.shape({push: PropTypes.func.isRequired}).isRequired
};

function mapStateToProps({authedUser}) {
  return {authedUser};
}

const mapDispatchToProps = {
  handleAddQuestion
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPoll);

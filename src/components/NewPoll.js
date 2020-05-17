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
      <div className='centerColumn'>
        <form onSubmit={this.handleSubmitForm}>
          <fieldset>
            <legend>Would you rather:</legend>
            <div className='newPollOptions'>
              {/* <li> */}
              <label htmlFor={this.state.optionOneText}>Option 1:</label>
              <input
                type='text'
                id={this.state.optionOneText}
                autoFocus
                value={this.state.optionOneText}
                onChange={this.handleTextChange('optionOneText')}
                placeholder='Eg. be rich'
              />
              {/* </li> */}
              {/* <li> */}
              <label htmlFor={this.state.optionTwoText}>Option 2:</label>
              <input
                type='text'
                id={this.state.optionTwoText}
                value={this.state.optionTwoText}
                onChange={this.handleTextChange('optionTwoText')}
                placeholder='Eg. be smart'
              />
              {/* </li> */}
            </div>
            <button
              type='submit'
              className='button'
              disabled={pipe(values, any(isEmpty))(this.state)}
            >
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

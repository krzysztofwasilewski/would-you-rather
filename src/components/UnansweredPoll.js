import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {pick} from 'ramda';
import {connect} from 'react-redux';
import Avatar from './Avatar';
import {saveAnswer} from '../actions/shared';

class UnansweredPoll extends Component {
  state = {value: ''};
  handleChange = e => this.setState({value: e.target.value});
  handleSubmit = e => {
    e.preventDefault();
    this.props.saveAnswer(
      this.props.authedUser,
      this.props.id,
      this.state.value
    );
  };
  render() {
    const {name, avatarURL, optionOneText, optionTwoText} = this.props;
    return (
      <div>
        <div className='avatarSection'>
          <Avatar name={name} avatarURL={avatarURL} size={192} />
        </div>
        <h2>{`${name} asks:`}</h2>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Would you rather…</legend>
            <div className='newPollOptions'>
              {[
                ['optionOne', optionOneText],
                ['optionTwo', optionTwoText]
              ].map(([option, text], index) => (
                <React.Fragment key={option}>
                  <input
                    type='radio'
                    value={option}
                    autoFocus={!index}
                    checked={this.state.value === option}
                    onChange={this.handleChange}
                    name='optionPicker'
                    id={option}
                  />
                  <label htmlFor={option}>{text}</label>
                </React.Fragment>
              ))}
            </div>
            <button
              type='submit'
              className='button'
              disabled={!this.state.value}
            >
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

UnansweredPoll.propTypes = {
  name: PropTypes.string.isRequired,
  avatarURL: PropTypes.string.isRequired,
  optionOneText: PropTypes.string.isRequired,
  optionTwoText: PropTypes.string.isRequired,
  authedUser: PropTypes.string.isRequired,
  saveAnswer: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

function mapStateToProps({users, questions, authedUser}, {id}) {
  return {
    ...pick(['name', 'avatarURL'], users[questions[id].author]),
    optionOneText: questions[id].optionOne.text,
    optionTwoText: questions[id].optionTwo.text,
    authedUser
  };
}

const mapActionsToProps = {
  saveAnswer
};
export default connect(mapStateToProps, mapActionsToProps)(UnansweredPoll);

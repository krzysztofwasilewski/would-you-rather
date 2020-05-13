import PropTypes from 'prop-types';
import {difference} from 'ramda';
import React from 'react';
import {connect} from 'react-redux';
import UnansweredPoll from './UnansweredPoll';
const UnansweredPollList = ({questionIds}) => (
  <div>
    {questionIds.map(id => (
      <UnansweredPoll key={id} id={id} />
    ))}
  </div>
);

UnansweredPollList.propTypes = {
  questionIds: PropTypes.arrayOf(PropTypes.string).isRequired
};

function mapStateToProps({users, questions, authedUser}) {
  return {
    questionIds: difference(
      Object.keys(questions),
      Object.keys(users[authedUser].answers)
    )
  };
}

export default connect(mapStateToProps)(UnansweredPollList);

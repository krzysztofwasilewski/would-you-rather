import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AnsweredPoll from './AnsweredPoll';
import UnansweredPoll from './UnansweredPoll';
import {connect} from 'react-redux';

const PollPage = ({answered, match}) => {
  const id = match.params.id;
  return (
    <div>
      {answered ? <AnsweredPoll id={id} /> : <UnansweredPoll id={id} />}
    </div>
  );
};

PollPage.propTypes = {
  answered: PropTypes.bool.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

function mapStateToProps({users, authedUser}, {match}) {
  return {
    answered: match.params.id in users[authedUser].answers
  };
}

export default connect(mapStateToProps)(PollPage);

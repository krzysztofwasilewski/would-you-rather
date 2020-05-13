import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AnsweredPoll from './AnsweredPoll';
import UnansweredPoll from './UnansweredPoll';

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

export default PollPage;

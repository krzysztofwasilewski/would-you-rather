import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AnsweredPoll from './AnsweredPoll';
import {UnansweredPoll} from './UnansweredPoll';

const PollPage = ({answered, id}) => {
  return (
    <div>
      {answered ? <AnsweredPoll id={id} /> : <UnansweredPoll id={id} />}
    </div>
  );
};

PollPage.propTypes = {
  answered: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired
};

export default PollPage;

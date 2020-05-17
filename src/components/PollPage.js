import React from 'react';
import PropTypes from 'prop-types';
import AnsweredPoll from './AnsweredPoll';
import UnansweredPoll from './UnansweredPoll';
import {connect} from 'react-redux';

const PollPage = ({answered, exists, id}) => {
  return exists ? (
    <div className='centerColumn'>
      {answered ? <AnsweredPoll id={id} /> : <UnansweredPoll id={id} />}
    </div>
  ) : (
    <h1 style={{marginTop: 200}}>404: Question not found!</h1>
  );
};

PollPage.propTypes = {
  answered: PropTypes.bool.isRequired,
  exists: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

function mapStateToProps({users, authedUser, questions}, {match}) {
  return {
    answered: match.params.id in (users?.[authedUser]?.answers ?? {}),
    exists: match.params.id in (questions ?? {}),
    id: match.params.id
  };
}

export default connect(mapStateToProps)(PollPage);

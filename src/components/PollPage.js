import React from 'react';
import PropTypes from 'prop-types';
import AnsweredPoll from './AnsweredPoll';
import UnansweredPoll from './UnansweredPoll';
import {connect} from 'react-redux';
import {Page404} from './Page404';
import {withRouter} from 'react-router-dom';

const QuestionNotFound = withRouter(Page404);

const PollPage = ({answered, exists, id}) => {
  return exists ? (
    <div className='centerColumn'>
      {answered ? <AnsweredPoll id={id} /> : <UnansweredPoll id={id} />}
    </div>
  ) : (
    <QuestionNotFound />
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

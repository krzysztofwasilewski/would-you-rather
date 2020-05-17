import PropTypes from 'prop-types';
import {difference} from 'ramda';
import React from 'react';
import {connect} from 'react-redux';
import PollPreview from './PollPreview';
import {Link} from 'react-router-dom';
const UnansweredPollList = ({questionIds}) => (
  <div>
    {questionIds.map(id => (
      <PollPreview key={id} id={id} />
    ))}
    {!questionIds.length && (
      <div>
        <p>
          Nothing to see here. <Link to='/add'>Create</Link> more polls here to
          keep the game going
        </p>
      </div>
    )}
  </div>
);

UnansweredPollList.propTypes = {
  questionIds: PropTypes.arrayOf(PropTypes.string).isRequired
};

function mapStateToProps({users, questions, authedUser}) {
  return {
    questionIds: difference(
      Object.keys(questions),
      Object.keys(users?.[authedUser]?.answers ?? {})
    ).sort(
      (keyA, keyB) => questions[keyB].timestamp - questions[keyA].timestamp
    )
  };
}

export default connect(mapStateToProps)(UnansweredPollList);

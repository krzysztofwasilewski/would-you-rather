import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import PollPreview from './PollPreview';
const AnsweredPollList = ({questionIds}) => (
  <div>
    {questionIds.map(id => (
      <PollPreview key={id} id={id} />
    ))}
  </div>
);

AnsweredPollList.propTypes = {
  questionIds: PropTypes.arrayOf(PropTypes.string).isRequired
};

function mapStateToProps({users, authedUser, questions}) {
  return {
    questionIds: Object.keys(users?.[authedUser]?.answers ?? {}).sort(
      (keyA, keyB) => questions[keyB].timestamp - questions[keyA].timestamp
    )
  };
}
export default connect(mapStateToProps)(AnsweredPollList);

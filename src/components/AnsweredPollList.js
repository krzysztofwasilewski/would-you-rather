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

function mapStateToProps({users, authedUser}) {
  return {
    questionIds: Object.keys(users?.[authedUser]?.answers ?? {})
  };
}
export default connect(mapStateToProps)(AnsweredPollList);

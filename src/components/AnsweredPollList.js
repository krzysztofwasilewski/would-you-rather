import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import AnsweredPoll from './AnsweredPoll';
const AnsweredPollList = ({questionIds}) => (
  <div>
    {questionIds.map(id => (
      <AnsweredPoll key={id} id={id} />
    ))}
  </div>
);

AnsweredPollList.propTypes = {
  questionIds: PropTypes.arrayOf(PropTypes.string).isRequired
};

// function mapStateToProps({authedUser, questions}) {
//   const doesntContainUser = complement(contains(authedUser));
//   const optionDoesntContainUser = propSatisfies(doesntContainUser, 'votes');
//   const questionDoesntContainUser = where({
//     optionOne: optionDoesntContainUser,
//     optionTwo: optionDoesntContainUser
//   });
//   const userFilter = reject(questionDoesntContainUser);
//   const sortByTimestamp = sortBy(prop('timestamp'));

//   return {
//     questionIds: pipe(
//       userFilter,
//       values,
//       sortByTimestamp,
//       map(prop('id'))
//     )(questions)
//   };
// }

function mapStateToProps({users, authedUser}) {
  return {
    questionIds: Object.keys(users[authedUser].answers)
  };
}
export default connect(mapStateToProps)(AnsweredPollList);

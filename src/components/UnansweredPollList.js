import PropTypes from 'prop-types';
import {
  complement,
  contains,
  filter,
  map,
  pipe,
  prop,
  propSatisfies,
  sortBy,
  values,
  where
} from 'ramda';
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

function mapStateToProps({authedUser, questions}) {
  const doesntContainUser = complement(contains(authedUser));
  const optionDoesntContainUser = propSatisfies(doesntContainUser, 'votes');
  const questionDoesntContainUser = where({
    optionOne: optionDoesntContainUser,
    optionTwo: optionDoesntContainUser
  });
  const userFilter = filter(questionDoesntContainUser);
  const sortByTimestamp = sortBy(prop('timestamp'));

  return {
    questionIds: pipe(
      userFilter,
      values,
      sortByTimestamp,
      map(prop('id'))
    )(questions)
  };
}

export default connect(mapStateToProps)(UnansweredPollList);

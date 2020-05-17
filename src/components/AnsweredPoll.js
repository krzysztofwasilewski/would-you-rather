import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {add} from 'ramda';
import Result from './Result';
import Avatar from './Avatar';

const AnsweredPoll = ({poll, author, authedUser}) => {
  const {optionOne, optionTwo} = poll;
  const totalVotes = [optionOne, optionTwo]
    .map(({votes}) => votes.length)
    .reduce(add);
  console.log('total votes: ', totalVotes);
  return (
    <div className='card'>
      <div className='avatarSection'>
        <Avatar name={author.name} avatarURL={author.avatarURL} />
      </div>
      <div className='contentSection'>
        <h2>Result</h2>
        {[optionOne, optionTwo].map((option, index) => (
          <Result
            key={option.text + index}
            text={option.text}
            votes={option.votes.length}
            totalVotes={totalVotes}
            isMine={option.votes.includes(authedUser)}
          />
        ))}
      </div>
    </div>
  );
};
AnsweredPoll.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatarURL: PropTypes.string.isRequired
  }).isRequired,
  poll: PropTypes.shape({
    optionOne: PropTypes.shape({
      votes: PropTypes.arrayOf(PropTypes.string).isRequired,
      text: PropTypes.string.isRequired
    }).isRequired,
    optionTwo: PropTypes.shape({
      votes: PropTypes.arrayOf(PropTypes.string).isRequired,
      text: PropTypes.string.isRequired
    }).isRequired,
    author: PropTypes.string.isRequired
  }).isRequired,
  authedUser: PropTypes.string.isRequired
};
function mapStateToProps({questions, users, authedUser}, {id}) {
  return {
    poll: questions[id],
    author: users[questions[id].author],
    authedUser
  };
}
export default connect(mapStateToProps)(AnsweredPoll);

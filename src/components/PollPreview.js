import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Avatar from './Avatar';

const PollPreview = ({poll, author}) => {
  return (
    <div>
      <h2>{`${author.name} is asking:`}</h2>
      <div>
        <Avatar name={author.name} avatarURL={author.avatarURL} />
      </div>
      <div>
        <h1>Would you rather</h1>
        <div>…{poll.optionOne.text}…</div>
        <Link to={`/question/${poll.id}`}>View poll</Link>
      </div>
    </div>
  );
};
PollPreview.propTypes = {
  author: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatarURL: PropTypes.string.isRequired
  }).isRequired,
  poll: PropTypes.shape({
    optionOne: PropTypes.shape({text: PropTypes.string.isRequired}).isRequired,
    id: PropTypes.string.isRequired
  }).isRequired
};

function mapStateToProps({questions, users}, {id}) {
  return {
    poll: questions[id],
    author: users[questions[id].author]
  };
}

export default connect(mapStateToProps)(PollPreview);

import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Avatar from './Avatar';

const PollPreview = ({poll, author}) => {
  return (
    <div className='card focusExpandable'>
      <div className='avatarSection'>
        <Avatar name={author.name} avatarURL={author.avatarURL} size={192} />
      </div>
      <div className='contentSection'>
        <h2>{`${author.name} is asking:`}</h2>
        <h1>Would you rather</h1>
        <p>…{poll.optionOne.text}…</p>
        <Link className='buttonLink' to={`/question/${poll.id}`}>
          View poll
        </Link>
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

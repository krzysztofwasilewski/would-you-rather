import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Avatar from './Avatar';

const Leader = ({user}) => {
  console.log(user, user.score);
  return (
    <div className='card'>
      <div className='avatarSection'>
        <Avatar name={user.name} avatarURL={user.avatarURL} />
      </div>
      <div className='contentSection'>
        <h2>{user.name}</h2>
        <table>
          <tbody>
            <tr>
              <td>Answered questions</td>
              <td>{Object.keys(user.answers).length}</td>
            </tr>
            <tr>
              <td>Created quesitons</td>
              <td>{user.questions.length}</td>
            </tr>
          </tbody>
        </table>
        <div className='scoreBox'>
          <h3>Score</h3>
          <p>{user.score}</p>
        </div>
      </div>
    </div>
  );
};

Leader.propTypes = {
  user: PropTypes.shape({
    answers: PropTypes.objectOf(PropTypes.string).isRequired,
    questions: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    avatarURL: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired
  })
};

function mapStateToProps({users}, {id}) {
  return {
    user: users[id]
  };
}
export default connect(mapStateToProps)(Leader);

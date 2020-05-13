import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const Leader = ({user}) => {
  console.log(user, user.score);
  return (
    <div>
      <div>
        <img src={user.avatarURL} />
      </div>
      <div>
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
      </div>
      <div>
        <h3>Score</h3>
        <div>{user.score}</div>
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

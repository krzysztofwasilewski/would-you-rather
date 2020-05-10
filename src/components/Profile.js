import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {pick} from 'lodash';

const Profile = ({name, avatarURL}) => {
  return (
    <div>
      <span>{`Hello, ${name}`}</span>
      <img src={avatarURL} alt={`Avatar for ${name}`}></img>
      <NavLink to='/login'>Log out</NavLink>
    </div>
  );
};
Profile.propTypes = {
  name: PropTypes.string.isRequired,
  avatarURL: PropTypes.string.isRequired
};

function mapStateToProps({users, authedUser}) {
  return pick(users[authedUser], ['name', 'avatarURL']);
}
export default connect(mapStateToProps)(Profile);

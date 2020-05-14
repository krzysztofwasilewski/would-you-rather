import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {pick} from 'ramda';
import {logOut} from '../actions/authedUser';
import Avatar from './Avatar';
const Profile = ({name, avatarURL, logOut}) => {
  return (
    <div>
      <span>{`Hello, ${name}`}</span>
      <Avatar name={name} avatarURL={avatarURL} />
      <button onClick={() => logOut()}>Log out</button>
    </div>
  );
};
Profile.propTypes = {
  name: PropTypes.string.isRequired,
  avatarURL: PropTypes.string.isRequired,
  logOut: PropTypes.func.isRequired
};

function mapStateToProps({users, authedUser}) {
  return pick(['name', 'avatarURL'], users[authedUser]);
}

const mapDispatchToProps = {
  logOut
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);

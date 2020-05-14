import React from 'react';
import PropTypes from 'prop-types';

const Avatar = ({avatarURL, name}) => (
  <img src={avatarURL} alt={`Avatar for ${name}`}></img>
);
Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  avatarURL: PropTypes.string.isRequired
};
export default Avatar;

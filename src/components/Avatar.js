import React from 'react';
import PropTypes from 'prop-types';

const Avatar = ({avatarURL, name, size}) => (
  <img
    src={avatarURL}
    alt={`Avatar for ${name}`}
    style={size && {width: size, height: 'auto'}}
  ></img>
);
Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  avatarURL: PropTypes.string.isRequired,
  size: PropTypes.number
};
export default Avatar;

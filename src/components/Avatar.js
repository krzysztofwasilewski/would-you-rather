import React from 'react';
import PropTypes from 'prop-types';

const Avatar = ({avatarURL, name, size}) =>
  avatarURL && (
    <img
      src={avatarURL}
      alt={`Avatar for ${name}`}
      style={size && {maxWidth: size, height: 'auto'}}
    ></img>
  );
Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  avatarURL: PropTypes.string.isRequired,
  size: PropTypes.number
};
export default Avatar;

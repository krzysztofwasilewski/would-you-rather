import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink>Home</NavLink>{' '}
        </li>
        <li>
          <NavLink>New Poll</NavLink>{' '}
        </li>
        <li>
          <NavLink>Leaderboard</NavLink>{' '}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
const Navigation = () => {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/add'>New Poll</NavLink>
        </li>
        <li>
          <NavLink to='/leaderboard'>Leaderboard</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

import React from 'react';
import {NavLink} from 'react-router-dom';
const Navigation = () => {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink
            className='navLink'
            activeClassName='activeNavLink'
            exact
            to='/'
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className='navLink'
            activeClassName='activeNavLink'
            to='/add'
          >
            New Poll
          </NavLink>
        </li>
        <li>
          <NavLink
            className='navLink'
            activeClassName='activeNavLink'
            to='/leaderboard'
          >
            Leaderboard
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

import React from 'react';
import PropTypes from 'prop-types';
import {NavLink, Redirect} from 'react-router-dom';
import AnsweredPollList from './AnsweredPollList';
import UnansweredPollList from './UnansweredPollList';

const Home = ({location, match}) => {
  const {url} = match;

  return (
    <div className='home centerColumn'>
      {!location.search && <Redirect to='/?u' />}
      <nav className='nav'>
        <ul>
          <li>
            <NavLink
              className='navLink'
              activeClassName='activeNavLink'
              exact
              isActive={() => location.search === '?a'}
              to={{pathname: url, search: '?a'}}
            >
              Answered
            </NavLink>
          </li>
          <li>
            <NavLink
              className='navLink'
              activeClassName='activeNavLink'
              exact
              isActive={() => location.search === '?u'}
              to={{pathname: url, search: '?u'}}
            >
              Unanswered
            </NavLink>
          </li>
        </ul>
      </nav>
      {location.search === '?a' && <AnsweredPollList />}

      {location.search === '?u' && <UnansweredPollList />}
    </div>
  );
};

Home.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired
  }).isRequired,
  location: PropTypes.shape({search: PropTypes.string.isRequired}).isRequired
};

export default Home;

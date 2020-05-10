import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import AnsweredPollList from './AnsweredPollList';
import UnansweredPollList from './UnansweredPollList';

const Home = ({location, match}) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to={`${match.url}?a`}>Answered</NavLink>
          </li>
          <li>
            <NavLink to={`${match.url}?u`}>Unanswered</NavLink>
          </li>
        </ul>
      </nav>
      {location.search === '?a' && <AnsweredPollList />}

      {location.search === '?u' && <UnansweredPollList />}
    </>
  );
};

Home.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired
  }).isRequired,
  location: PropTypes.shape({search: PropTypes.string.isRequired}).isRequired
};

export default Home;

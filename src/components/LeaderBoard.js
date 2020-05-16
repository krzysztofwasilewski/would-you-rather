import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Leader from './Leader';

const LeaderBoard = ({ids}) => {
  return (
    <div className='centerColumn'>
      {ids.map(id => (
        <Leader key={id} id={id} />
      ))}
    </div>
  );
};

LeaderBoard.propTypes = {
  ids: PropTypes.arrayOf(PropTypes.string).isRequired
};

function mapStateToProps({users}) {
  const keys = Object.keys(users).sort(
    (k1, k2) => users[k1].score - users[k2].score
  );
  return {
    ids: keys
  };
}
export default connect(mapStateToProps)(LeaderBoard);

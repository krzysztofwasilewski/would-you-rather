import React from 'react';
import PropTypes from 'prop-types';

const Result = ({text, votes, totalVotes, isMine}) => {
  const percentage = (100 * votes) / totalVotes;
  return (
    <div>
      {isMine && <div>Your vote</div>}
      <p>{text}</p>
      <div>
        <div>{!Number.isNaN(percentage) && `${percentage.toFixed(1)}%`}</div>
      </div>
      <p>{`${votes} out of ${totalVotes} votes`}</p>
    </div>
  );
};

Result.propTypes = {
  text: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  totalVotes: PropTypes.number.isRequired,
  isMine: PropTypes.bool
};

export default Result;

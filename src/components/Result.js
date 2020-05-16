import React from 'react';
import PropTypes from 'prop-types';

const Result = ({text, votes, totalVotes, isMine}) => {
  const percentage = (100 * votes) / totalVotes;
  return (
    <div className='result'>
      {isMine && (
        <div className='yourVote'>
          Your
          <br />
          vote
        </div>
      )}
      <p>{text}</p>
      <div className='barContainer'>
        <div className='bar' style={{width: `${percentage.toFixed(1)}%`}}>
          {!Number.isNaN(percentage) && `${percentage.toFixed(1)}%`}
        </div>
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

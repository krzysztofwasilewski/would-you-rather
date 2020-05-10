import React, {Component} from 'react';
import PropTypes from 'prop-types';

class NewPoll extends Component {
  state = {optionOneText: '', optionTwoText: ''};
  render() {
    return (
      <div>
        <form>
          <ul>
            <li>
              <input type='text' value={this.state.optionOneText} />
            </li>
            <li>
              <input type='text' value={this.state.optionTwoText} />
            </li>
          </ul>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default NewPoll;

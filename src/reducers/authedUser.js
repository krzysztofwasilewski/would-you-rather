import {LOG_IN, LOG_OUT} from '../actions/authedUser';

export default function (state = null, {type, userId}) {
  switch (type) {
    case LOG_IN:
      return userId;
    case LOG_OUT:
      return null;
  }
  return state;
}

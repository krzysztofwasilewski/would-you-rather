import {ADD_USERS} from '../actions/users';
export default function (state = {}, action) {
  switch (action.type) {
    case ADD_USERS:
      return {...state, ...action.users};
    default:
      break;
  }
  return state;
}

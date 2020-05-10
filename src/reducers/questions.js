import {ADD_QUESTIONS} from '../actions/questions';

export default function (state = {}, action) {
  switch (action.type) {
    case ADD_QUESTIONS:
      return {...state, ...action.questions};
    default:
      break;
  }
  return state;
}

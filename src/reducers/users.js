import {
  ADD_USERS,
  ADD_USER_ANSWER,
  REMOVE_ANSWER_FROM_USER,
  ADD_USER_QUESTION
} from '../actions/users';
import {omit} from 'ramda';

class User {
  constructor(fromUserObject) {
    Object.assign(this, fromUserObject);
  }
  get score() {
    return Object.keys(this.answers).length + this.questions.length;
  }
}
export default function (state = {}, action) {
  switch (action.type) {
    case ADD_USERS:
      return {
        ...state,
        ...Object.fromEntries(
          Object.entries(action.users).map(([k, v]) => [k, new User(v)])
        )
      };
    case ADD_USER_ANSWER:
      return {
        ...state,
        [action.user]: new User({
          ...state[action.user],
          answers: {
            ...state[action.user].answers,
            [action.qid]: action.answer
          }
        })
      };
    case REMOVE_ANSWER_FROM_USER:
      return {
        ...state,
        [action.user]: new User({
          ...state[action.user],
          answers: omit([action.qid], state[action.user].answers)
        })
      };
    case ADD_USER_QUESTION:
      return {
        ...state,
        [action.author]: new User({
          ...state[action.author],
          questions: [...state[action.author].questions, action.id]
        })
      };
    default:
      break;
  }
  return state;
}

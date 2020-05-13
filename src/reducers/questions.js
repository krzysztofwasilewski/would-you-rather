import {
  ADD_QUESTION,
  ADD_QUESTIONS,
  ADD_QUESTION_ANSWER,
  REMOVE_ANSWER_FROM_QUESTION
} from '../actions/questions';
import {omit} from 'ramda';

export default function (state = {}, action) {
  switch (action.type) {
    case ADD_QUESTIONS:
      return {...state, ...action.questions};
    case ADD_QUESTION:
      return {...state, [action.question.id]: action.question};
    case ADD_QUESTION_ANSWER:
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: state[action.qid][action.answer].votes.concat([
              action.authedUser
            ])
          }
        }
      };
    case REMOVE_ANSWER_FROM_QUESTION:
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: omit([action.authedUser], state[action.qid][action.answer])
          }
        }
      };
    default:
      break;
  }
  return state;
}

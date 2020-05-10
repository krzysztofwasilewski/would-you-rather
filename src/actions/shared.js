import {getUsers, getQuestions} from '../utils/API';
import {addUsers} from '../actions/users';
import {addQuestions} from '../actions/questions';

export function getData() {
  return dispatch => {
    return Promise.all([getUsers(), getQuestions()]).then(
      ([users, questions]) => {
        dispatch(addUsers(users));
        dispatch(addQuestions(questions));
      }
    );
  };
}

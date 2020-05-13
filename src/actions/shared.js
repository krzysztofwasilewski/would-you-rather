import {getUsers, getQuestions, saveQuestionAnswer} from '../utils/API';
import {addUsers, addUserAnswer, removeAnswerFromUser} from '../actions/users';
import {
  addQuestions,
  answerQuestion,
  removeAnswerFromQuestion
} from '../actions/questions';
import {batch} from 'react-redux';

export function getData() {
  return dispatch =>
    Promise.all([getUsers(), getQuestions()])
      .then(([users, questions]) =>
        batch(() => {
          dispatch(addUsers(users));
          dispatch(addQuestions(questions));
        })
      )
      .catch(e => console.log('caught error', e));
}

export function saveAnswer(authedUser, qid, answer) {
  return dispatch =>
    batch(() => {
      dispatch(answerQuestion(authedUser, qid, answer));
      dispatch(addUserAnswer(authedUser, qid, answer));
      saveQuestionAnswer({authedUser, qid, answer}).catch(e => {
        console.log('caught error', e);
        batch(() => {
          dispatch(removeAnswerFromQuestion(authedUser, qid, answer));
          dispatch(removeAnswerFromUser(authedUser, qid, answer));
        });
      });
    });
}

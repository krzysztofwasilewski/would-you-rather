import {
  getUsers,
  getQuestions,
  saveQuestionAnswer,
  saveQuestion
} from '../utils/API';
import {
  addUsers,
  addUserAnswer,
  removeAnswerFromUser,
  addUserQuestion
} from '../actions/users';
import {
  addQuestions,
  answerQuestion,
  removeAnswerFromQuestion,
  addQuestion
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
        console.log('Caught error', e);
        batch(() => {
          dispatch(removeAnswerFromQuestion(authedUser, qid, answer));
          dispatch(removeAnswerFromUser(authedUser, qid, answer));
        });
      });
    });
}

export function handleAddQuestion(question) {
  return dispatch =>
    saveQuestion(question)
      .then(question => {
        batch(() => {
          dispatch(addQuestion(question));
          dispatch(addUserQuestion(question));
        });
      })
      .catch(e => console.log('Caught error', e));
}

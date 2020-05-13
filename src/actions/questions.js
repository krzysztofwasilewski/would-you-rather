import {saveQuestion} from '../utils/API';
export const ADD_QUESTIONS = 'ADD_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER';
export const REMOVE_ANSWER_FROM_QUESTION = 'REMOVE_ANSWER_FROM_QUESTION';

export function addQuestions(questions) {
  return {
    type: ADD_QUESTIONS,
    questions
  };
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  };
}

export function answerQuestion(authedUser, qid, answer) {
  return {
    type: ADD_QUESTION_ANSWER,
    authedUser,
    qid,
    answer
  };
}

export function handleAddQuestion(question) {
  console.log('Save question action');
  return dispatch =>
    saveQuestion(question)
      .then(q => dispatch(addQuestion(q)))
      .catch(e => console.log('caught error', e));
}

export function removeAnswerFromQuestion(authedUser, qid, answer) {
  return {
    type: REMOVE_ANSWER_FROM_QUESTION,
    authedUser,
    qid,
    answer
  };
}

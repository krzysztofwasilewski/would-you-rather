export const ADD_USERS = 'ADD_USERS';
export const ADD_USER_ANSWER = 'ADD_USER_ANSWER';
export const REMOVE_ANSWER_FROM_USER = 'REMOVE_ANSWER_FROM_USER';
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION';

export function addUsers(users) {
  return {
    type: ADD_USERS,
    users
  };
}
export function addUserAnswer(user, qid, answer) {
  return {
    type: ADD_USER_ANSWER,
    user,
    qid,
    answer
  };
}

export function addUserQuestion({author, id}) {
  return {
    type: ADD_USER_QUESTION,
    author,
    id
  };
}
export function removeAnswerFromUser(authedUser, qid, answer) {
  return {
    type: REMOVE_ANSWER_FROM_USER,
    authedUser,
    qid,
    answer
  };
}

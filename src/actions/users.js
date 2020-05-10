export const ADD_USERS = 'ADD_USERS';

export function addUsers(users) {
    return {
        type: ADD_USERS,
        users
    }
}
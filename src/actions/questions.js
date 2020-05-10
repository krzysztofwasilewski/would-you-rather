export const ADD_QUESTIONS = 'ADD_QUESTIONS';

export function addQuestions(questions) {
    return {
        type: ADD_QUESTIONS,
        questions
    }
}
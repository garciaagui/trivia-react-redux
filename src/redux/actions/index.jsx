export const NEW_USER = 'NEW_USER';
export const QUESTIONS = 'QUESTIONS';
export const ADD_SCORE = 'ADD_SCORE';

export const actionNewUser = (payload) => (
  {
    type: NEW_USER,
    payload,
  }
);

export const actionAddScore = (payload) => (
  {
    type: ADD_SCORE,
    payload,
  }
);

export const actionQuestions = (payload) => (
  {
    type: QUESTIONS,
    payload,
  }
);

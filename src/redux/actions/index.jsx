export const NEW_USER = 'NEW_USER';
export const QUESTIONS = 'QUESTIONS';
export const ADD_SCORE = 'ADD_SCORE';
export const ADD_ASSERTIONS = 'ADD_ASSERTIONS';
export const CURRENT_QUESTION = 'CURRENT_QUESTION';

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

export const actionAddAssertions = (payload) => (
  {
    type: ADD_ASSERTIONS,
    payload,
  }
);

export const actionQuestions = (payload) => (
  {
    type: QUESTIONS,
    payload,
  }
);

export const actionCurrQuestion = (payload) => (
  {
    type: CURRENT_QUESTION,
    payload,
  }
);

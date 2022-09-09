export const NEW_USER = 'NEW_USER';
export const QUESTIONS = 'QUESTIONS';

export const actionNewUser = (payload) => (
  {
    type: NEW_USER,
    payload,
  }
);

export const actionQuestions = (payload) => (
  {
    type: QUESTIONS,
    payload,
  }
);

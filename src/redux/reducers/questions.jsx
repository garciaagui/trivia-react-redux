import { CURRENT_QUESTION, QUESTIONS } from '../actions';

const INITIAL_STATE = {
  questions: '',
  currQuestion: 0,
};

function reducerQuestions(state = INITIAL_STATE, action) {
  switch (action.type) {
  case QUESTIONS:
    return {
      ...state,
      questions: action.payload,
    };
  case CURRENT_QUESTION:
    return {
      ...state,
      currQuestion: action.payload,
    };
  default:
    return state;
  }
}

export default reducerQuestions;

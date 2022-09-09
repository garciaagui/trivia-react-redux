import { QUESTIONS } from '../actions';

const INITIAL_STATE = {
  questions: '',
};

function reducerQuestions(state = INITIAL_STATE, action) {
  switch (action.type) {
  case QUESTIONS:
    return {
      ...state,
      questions: action.payload,
    };
  default:
    return state;
  }
}

export default reducerQuestions;

import { NEW_USER, USER_EMAIL } from '../actions';

const INITIAL_STATE = {
  name: '',
  assertions: '',
  score: '',
  gravatarEmail: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case NEW_USER:
    return {
      ...state,
      name: action.payload,
    };
  case USER_EMAIL:
    return {
      ...state,
      gravatarEmail: action.payload,
    };
  default:
    return state;
  }
}

export default user;

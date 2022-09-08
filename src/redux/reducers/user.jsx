import { NEW_USER } from '../actions';

const INITIAL_STATE = {
  name: '',
  assertions: '',
  score: 0,
  gravatarEmail: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case NEW_USER:
    return {
      ...state,
      name: action.payload.name,
      gravatarEmail: action.payload.email,
    };
  default:
    return state;
  }
}

export default user;

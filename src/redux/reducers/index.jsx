import { combineReducers } from 'redux';
import reducerUser from './user';
import reducerQuestions from './questions';

const rootReducer = combineReducers({ player: reducerUser, reducerQuestions });

export default rootReducer;

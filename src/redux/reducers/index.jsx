import { combineReducers } from 'redux';
import reducerUser from './user';
import reducerQuestions from './questions';

const rootReducer = combineReducers({ reducerUser, reducerQuestions });

export default rootReducer;

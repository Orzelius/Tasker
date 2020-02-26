import {combineReducers} from 'redux';
import authReducer from './authReducer';
import taskReducer from './taskReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  tasks: taskReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
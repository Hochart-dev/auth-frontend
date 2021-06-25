import { combineReducers, createStore } from 'redux';
import user from './user';

const mainReducer = combineReducers({ user });
export default createStore(mainReducer);

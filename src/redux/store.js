// @flow

import { combineReducers, createStore } from 'redux';

import todo from './reducers/todo'
import filter from './reducers/filter'


let rootReducer = combineReducers({ todo, filter });
let store = createStore(rootReducer);

export default store;
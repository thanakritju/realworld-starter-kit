import { applyMiddleware, createStore } from 'redux';
import reducer from './reducer'
import { promiseMiddleware } from './middleware';

export const store = createStore(reducer, applyMiddleware(promiseMiddleware));
/* eslint-disable no-underscore-dangle */
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import rootReducer from '../reducer';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));
export default store;

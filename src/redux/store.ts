import { createStore, combineReducers, applyMiddleware } from 'redux';
import ajaxCallsInProgress from './reducers/ajaxStatusReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import appReducer from './reducers/appReducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  ajaxCallsInProgress,
  app: appReducer
});

const initialState = {};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;

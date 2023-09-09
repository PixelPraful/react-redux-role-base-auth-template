import initialState from './initialState';
import * as types from '../actions/actionTypes';
import type { AppState } from '../types/reduxState';

interface appActions {
  type: string
  payload: any
}

export default function appReducer (currentState: AppState, action: appActions): any {
  const state = currentState || initialState.app;
  switch (action.type) {
    case types.SET_SUCCESS_MESSAGE:
      return {
        ...state,
        successMessage: action.payload
      };

    case types.SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.payload
      };

    case types.SET_LOADING_STATE:
      return {
        ...state,
        loader: action.payload
      };

    default:
      return state;
  }
}

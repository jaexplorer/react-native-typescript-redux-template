export const SET_AUTH_LOADING = 'SET_AUTH_LOADING';
export const AUTH_LOADING_SUCCESS = 'AUTH_LOADING_SUCCESS';
export const AUTH_LOADING_ERROR = 'AUTH_LOADING_ERROR';

export const SET_API_LOADING = 'SET_API_LOADING';
export const API_LOADING_SUCCESS = 'API_LOADING_SUCCESS';
export const API_LOADING_ERROR = 'API_LOADING_ERROR';

export interface LoadingState {
  authLoading: boolean;
  apiLoading: boolean;
}

export interface SetAuthLoadingAction {
  type: typeof SET_AUTH_LOADING;
}

export interface AuthLoadingSuccessAction {
  type: typeof AUTH_LOADING_SUCCESS;
}

export interface AuthLoadingErrorAction {
  type: typeof AUTH_LOADING_ERROR;
}

export interface SetApiLoadingAction {
  type: typeof SET_API_LOADING;
}

export interface ApiLoadingSuccessAction {
  type: typeof API_LOADING_SUCCESS;
}

export interface ApiLoadingErrorAction {
  type: typeof API_LOADING_ERROR;
}

export type LoadingActionTypes =
  | SetAuthLoadingAction
  | AuthLoadingSuccessAction
  | AuthLoadingErrorAction
  | SetApiLoadingAction
  | ApiLoadingSuccessAction
  | ApiLoadingErrorAction;

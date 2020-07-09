import {
  LoadingActionTypes,
  SET_AUTH_LOADING,
  AUTH_LOADING_SUCCESS,
  AUTH_LOADING_ERROR,
  SET_API_LOADING,
  API_LOADING_SUCCESS,
  API_LOADING_ERROR,
} from '../Types/loading';

export const setAuthLoading = (): LoadingActionTypes => ({
  type: SET_AUTH_LOADING,
});

export const authLoadingSuccess = (): LoadingActionTypes => ({
  type: AUTH_LOADING_SUCCESS,
});

export const authLoadingError = (): LoadingActionTypes => ({
  type: AUTH_LOADING_ERROR,
});

export const setApiLoading = (): LoadingActionTypes => ({
  type: SET_API_LOADING,
});

export const apiLoadingSuccess = (): LoadingActionTypes => ({
  type: API_LOADING_SUCCESS,
});

export const apiLoadingError = (): LoadingActionTypes => ({
  type: API_LOADING_ERROR,
});

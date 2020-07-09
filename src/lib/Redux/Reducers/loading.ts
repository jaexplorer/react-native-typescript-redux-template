import {
  LoadingState,
  SET_AUTH_LOADING,
  LoadingActionTypes,
  AUTH_LOADING_SUCCESS,
  AUTH_LOADING_ERROR,
  SET_API_LOADING,
  API_LOADING_SUCCESS,
  API_LOADING_ERROR,
} from '../Types/loading';

const initialState: LoadingState = {
  authLoading: false,
  apiLoading: false,
};

const loadingReducer = (
  state: LoadingState = initialState,
  action: LoadingActionTypes,
): LoadingState => {
  switch (action.type) {
    case SET_AUTH_LOADING:
      return {
        ...state,
        authLoading: true,
      };
    case AUTH_LOADING_SUCCESS:
    case AUTH_LOADING_ERROR:
      return {
        ...state,
        authLoading: false,
      };
    case SET_API_LOADING:
      return {
        ...state,
        apiLoading: true,
      };
    case API_LOADING_SUCCESS:
    case API_LOADING_ERROR:
      return {
        ...state,
        apiLoading: false,
      };
    default:
      return state;
  }
};

export default loadingReducer;

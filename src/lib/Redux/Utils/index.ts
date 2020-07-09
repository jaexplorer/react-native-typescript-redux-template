import axios from 'axios';
import { setApiLoading, apiLoadingSuccess, apiLoadingError } from '../Actions/loading';
import { APIThunkResult, APIThunkDispatch, APIResult, ApiStatus, RequestType } from '../../Types';
import { ApplicationState } from '../Store';

export interface FetchOptions {
  method: RequestType;
  url: string;
  param?: any;
  body?: any;
}

const apiSuccess = (dispatch: APIThunkDispatch, data: any = null): APIResult<typeof data> => {
  dispatch(apiLoadingSuccess());
  return { status: ApiStatus.SUCCESS, data };
};

const apiError = (dispatch: APIThunkDispatch, error: Error): APIResult<any> => {
  dispatch(apiLoadingError());
  return { status: ApiStatus.FAILED, error };
};

export function apiRequest<T = null>(
  request: (dispatch: APIThunkDispatch, getState: () => ApplicationState) => Promise<T>,
): APIThunkResult<T> {
  return async (
    dispatch: APIThunkDispatch,
    getState: () => ApplicationState,
  ): Promise<APIResult<T>> => {
    try {
      dispatch(setApiLoading());
      const data: T = await request(dispatch, getState);
      return apiSuccess(dispatch, data);
    } catch (error) {
      return apiError(dispatch, error);
    }
  };
}

export async function apiFetch<T>(options: FetchOptions): Promise<T> {
  const { method, url, param, body } = options;
  const getUrl = param ? `${url}/${param}` : url;
  // TODO: ADD TOKEN HERE
  const token = '';

  const response = await axios({
    method,
    url: getUrl,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `bearer ${token}`,
    },
    data: JSON.stringify(body),
  });

  const json = await response.data.json();

  if (response.statusText !== 'OK') {
    return Promise.reject(json);
  }

  return json;
}

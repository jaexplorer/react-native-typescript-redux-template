import { APIResult, APIThunkResult, Example } from '../../Types';
import { apiRequest, apiFetch } from '../Utils';
import { LoadExampleAction, LOAD_EXAMPLE } from '../Types/example';

export type LoadExampleResult = Promise<APIResult<Example>>;
export const loadExample = (exampleId: number | string): APIThunkResult<Example> => {
  return apiRequest<Example>(async (dispatch) => {
    const res = await apiFetch<Example>({
      method: 'GET',
      url: `SERVER/view/${exampleId}`,
    });

    dispatch<LoadExampleAction>({
      type: LOAD_EXAMPLE,
      example: res,
    });

    return res;
  });
};

import { Reducer } from 'redux';
import { ExampleState, ExampleActionTypes, LOAD_EXAMPLE } from '../Types/example';

export const initialPostsState: ExampleState = {
  examples: [],
};

const ExampleReducer: Reducer<ExampleState, ExampleActionTypes> = (
  state = initialPostsState,
  action,
) => {
  switch (action.type) {
    case LOAD_EXAMPLE:
      return { ...state, examples: [...state.examples, action.example] };
    default:
      return state;
  }
};

export default ExampleReducer;

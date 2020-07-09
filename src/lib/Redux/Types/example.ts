import { Example } from '../../Types';

export const LOAD_EXAMPLE = 'LOAD_EXAMPLE';

export interface ExampleState {
  examples: Example[];
}

export interface LoadExampleAction {
  type: typeof LOAD_EXAMPLE;
  example: Example;
}

export type ExampleActionTypes = LoadExampleAction;

import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import ReduxComponent from '../ReduxComponent';
import Store from '../../../lib/Redux/Store';

test('Does component render test', () => {
  const { baseElement } = render(
    <Provider store={Store}>
      <ReduxComponent />
    </Provider>,
  );
  expect(baseElement).toMatchSnapshot();
});

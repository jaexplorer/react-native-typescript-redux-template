import React from 'react';
import { View } from 'react-native';
import { render } from '@testing-library/react-native';
import Button from '../Button';
import ButtonRoot from '../ButtonRoot';

test('Does Button render test', () => {
  const { baseElement } = render(<Button>Test</Button>);
  expect(baseElement).toMatchSnapshot();
});

test('Does ButtonRoot render test', () => {
  const { baseElement } = render(
    <ButtonRoot>
      <View />
    </ButtonRoot>,
  );
  expect(baseElement).toMatchSnapshot();
});

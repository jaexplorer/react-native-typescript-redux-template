import React from 'react';
import { View, Text } from 'react-native';
import { render } from '@testing-library/react-native';

export const Nothing = () => {
  return (
    <View>
      <Text>Test</Text>
    </View>
  );
};

test('example test', () => {
  const { baseElement } = render(<Nothing />);
  expect(baseElement).toMatchSnapshot();
});

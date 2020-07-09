import React from 'react';
import { render } from '@testing-library/react-native';
import Image from '../Image';
import { Plus } from '../../../assets/images';

test('Does component render test', () => {
  const { baseElement } = render(<Image source={Plus} />);
  expect(baseElement).toMatchSnapshot();
});

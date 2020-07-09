import React from 'react';
import { Image as RNImage, ImageProps } from 'react-native';

const Image = (props: ImageProps): React.ReactElement<ImageProps> => {
  return <RNImage {...props} />;
};

export default Image;

import React from 'react';
import { Image } from 'react-native';

function Avatar(props) {
  const { source, radius, style } = props;

  return (
    <Image
      source={source}
      style={[radius && { borderRadius: radius }, style]}
      width={64}
      height={64}
    />
  );
}

export default Avatar;

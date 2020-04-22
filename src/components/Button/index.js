import React from 'react';
import { TouchableOpacity } from 'react-native';

function Button(props) {
  const { bgColor, children } = props;

  const style = [
    bgColor && { backgroundColor: bgColor },
    {
      shadowColor: '#4E4F72',
      shadowOpacity: 0.08,
      shadowRadius: 60,
      shadowOffset: { width: 0, height: 4 },
      elevation: 60,
    },
  ];

  return <TouchableOpacity style={style}>{children}</TouchableOpacity>;
}

export default Button;

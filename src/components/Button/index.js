import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { colors } from '../../styles';

function Button(props) {
  const { bgColor, style, children } = props;

  const buttonStyle = [
    bgColor && { backgroundColor: bgColor },
    {
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 16,
      borderRadius: 24,
      shadowColor: '#4E4F72',
      shadowOpacity: 0.08,
      shadowRadius: 60,
      shadowOffset: { width: 0, height: 4 },
      elevation: 60,
    },
    style,
  ];

  return <TouchableOpacity style={buttonStyle}>{children}</TouchableOpacity>;
}

Button.propTypes = {
  bgColor: PropTypes.string,
};

Button.defaultProps = {
  bgColor: colors.darkPurple,
};

export default Button;

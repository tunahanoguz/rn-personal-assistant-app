import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { colors, fonts } from '../../styles';

const Typography = (props) => {
  const {
    extraLarge,
    large,
    lowerLarge,
    medium,
    normal,
    small,
    boldWeight,
    mediumWeight,
    color,
    align,
    uppercase,
    style,
    children,
  } = props;

  const customStyle = [
    extraLarge && fonts.extraLarge,
    large && fonts.large,
    lowerLarge && fonts.lowerLarge,
    medium && fonts.medium,
    normal && fonts.normal,
    small && fonts.small,
    boldWeight && { fontFamily: 'CircularStd-Bold' },
    mediumWeight && { fontFamily: 'CircularStd-Medium' },
    color && { color },
    align && { textAlign: align },
    uppercase && { textTransform: 'uppercase' },
    { fontFamily: 'CircularStd-Book', includeFontPadding: false },
    style,
  ];

  return <Text style={customStyle}>{children}</Text>;
};

Typography.propTypes = {
  extraLarge: PropTypes.bool,
  large: PropTypes.bool,
  lowerLarge: PropTypes.bool,
  medium: PropTypes.bool,
  normal: PropTypes.bool,
  small: PropTypes.bool,
  boldWeight: PropTypes.bool,
  mediumWeight: PropTypes.bool,
  color: PropTypes.string,
  align: PropTypes.string,
  uppercase: PropTypes.bool,
  lineThrough: PropTypes.bool,
  style: PropTypes.object,
};

Typography.defaultProps = {
  extraLarge: false,
  large: false,
  lowerLarge: false,
  medium: false,
  normal: true,
  small: false,
  boldWeight: false,
  mediumWeight: false,
  color: colors.black,
  align: 'left',
  uppercase: false,
  style: null,
};

export default Typography;

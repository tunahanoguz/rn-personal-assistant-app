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
    extraSmall,
    smallest,
    boldWeight,
    mediumWeight,
    color,
    align,
    uppercase,
    style,
    children,
  } = props;

  const customStyle = [
    normal && fonts.normal,
    extraLarge && fonts.extraLarge,
    large && fonts.large,
    lowerLarge && fonts.lowerLarge,
    medium && fonts.medium,
    small && fonts.small,
    extraSmall && fonts.extraSmall,
    smallest && fonts.smallest,
    {
      fontFamily: 'CircularStd-Book',
      includeFontPadding: false,
    },
    boldWeight && { fontFamily: 'CircularStd-Bold' },
    mediumWeight && { fontFamily: 'CircularStd-Medium' },
    color && { color },
    align && { textAlign: align },
    uppercase && { textTransform: 'uppercase' },
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
  extraSmall: PropTypes.bool,
  smallest: PropTypes.bool,
  boldWeight: PropTypes.bool,
  mediumWeight: PropTypes.bool,
  color: PropTypes.string,
  align: PropTypes.string,
  uppercase: PropTypes.bool,
  lineThrough: PropTypes.bool,
  style: PropTypes.any,
};

Typography.defaultProps = {
  extraLarge: false,
  large: false,
  lowerLarge: false,
  medium: false,
  normal: true,
  small: false,
  extraSmall: false,
  smallest: false,
  boldWeight: false,
  mediumWeight: false,
  color: colors.black,
  align: 'left',
  uppercase: false,
  style: null,
};

export default Typography;

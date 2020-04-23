import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

function Block(props) {
  const {
    flex,
    flexDirection,
    justifyContent,
    alignItems,
    align,
    width,
    height,
    color,
    margin,
    padding,
    radius,
    style,
    children,
  } = props;

  const handleMargins = () => {
    if (typeof margin === 'number') {
      return {
        marginTop: margin,
        marginRight: margin,
        marginBottom: margin,
        marginLeft: margin,
      };
    }

    if (typeof margin === 'object') {
      const marginSize = Object.keys(margin).length;
      switch (marginSize) {
        case 1:
          return {
            marginTop: margin[0],
            marginRight: margin[0],
            marginBottom: margin[0],
            marginLeft: margin[0],
          };
        case 2:
          return {
            marginTop: margin[0],
            marginRight: margin[1],
            marginBottom: margin[0],
            marginLeft: margin[1],
          };
        case 3:
          return {
            marginTop: margin[0],
            marginRight: margin[1],
            marginBottom: margin[2],
            marginLeft: margin[1],
          };
        default:
          return {
            marginTop: margin[0],
            marginRight: margin[1],
            marginBottom: margin[2],
            marginLeft: margin[3],
          };
      }
    }
  };

  const handlePaddings = () => {
    if (typeof padding === 'number') {
      return {
        paddingTop: padding,
        paddingRight: padding,
        paddingBottom: padding,
        paddingLeft: padding,
      };
    }

    if (typeof padding === 'object') {
      const paddingSize = Object.keys(padding).length;
      switch (paddingSize) {
        case 1:
          return {
            paddingTop: padding[0],
            paddingRight: padding[0],
            paddingBottom: padding[0],
            paddingLeft: padding[0],
          };
        case 2:
          return {
            paddingTop: padding[0],
            paddingRight: padding[1],
            paddingBottom: padding[0],
            paddingLeft: padding[1],
          };
        case 3:
          return {
            paddingTop: padding[0],
            paddingRight: padding[1],
            paddingBottom: padding[2],
            paddingLeft: padding[1],
          };
        default:
          return {
            paddingTop: padding[0],
            paddingRight: padding[1],
            paddingBottom: padding[2],
            paddingLeft: padding[3],
          };
      }
    }
  };

  const handleRadius = () => {
    if (typeof radius === 'number') {
      return {
        borderRadius: radius,
      };
    }

    if (typeof radius === 'object') {
      const radiusSize = Object.keys(radius).length;
      switch (radiusSize) {
        case 1:
          return {
            borderTopStartRadius: radius[0],
            borderTopEndRadius: radius[0],
            borderBottomStartRadius: radius[0],
            borderBottomEndRadius: radius[0],
          };
        case 2:
          return {
            borderTopStartRadius: radius[0],
            borderTopEndRadius: radius[0],
            borderBottomStartRadius: radius[1],
            borderBottomEndRadius: radius[1],
          };
        case 3:
          return {
            borderTopStartRadius: radius[0],
            borderTopEndRadius: radius[0],
            borderBottomStartRadius: radius[1],
            borderBottomEndRadius: radius[2],
          };
        default:
          return {
            borderTopStartRadius: radius[0],
            borderTopEndRadius: radius[1],
            borderBottomStartRadius: radius[2],
            borderBottomEndRadius: radius[3],
          };
      }
    }
  };

  const blockStyle = [
    flex && { flex },
    flexDirection && { flexDirection },
    justifyContent && { justifyContent },
    alignItems && { alignItems },
    align && { alignSelf: align },
    width && { width },
    height && { height },
    color && { backgroundColor: color },
    margin && { ...handleMargins() },
    padding && { ...handlePaddings() },
    radius && { ...handleRadius() },
    style,
  ];

  return <View style={blockStyle}>{children}</View>;
}

Block.propTypes = {
  flex: PropTypes.number,
  flexDirection: PropTypes.string,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  align: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  margin: PropTypes.array,
  padding: PropTypes.array,
  radius: PropTypes.any,
  style: PropTypes.object,
};

export default Block;

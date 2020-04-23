import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import { colors } from '../../styles';
import Block from '../Block';

function DashedButton({ isFinished, icon }) {
  return (
    <Block
      justifyContent="center"
      alignItems="center"
      width={34}
      height={34}
      padding={[13]}
      color={isFinished ? colors.lightPurple : 'transparent'}
      radius={10}
      style={
        !isFinished
          ? {
              borderWidth: 1,
              borderColor: colors.lightPurple,
              borderStyle: 'dashed',
            }
          : null
      }>
      {isFinished && (
        <Image source={require('../../assets/icons/confirm-icon.png')} />
      )}

      {icon && <Image source={icon} />}
    </Block>
  );
}

DashedButton.propTypes = {
  isFinished: PropTypes.bool,
  icon: PropTypes.any,
};

DashedButton.defaultProps = {
  isFinished: false,
  icon: null,
};

export default DashedButton;

import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import Block from '../Block';
import Text from '../Text';
import { colors } from '../../styles';

function EventCard(props) {
  const { title, author, description, color, isFinished } = props;

  return (
    <Block
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      margin={[0, 0, 32, 0]}>
      <Block flex={0.9} flexDirection="row">
        <Block
          width={3}
          margin={[0, 16, 0, 0]}
          color={colors[color]}
          radius={100}
        />

        <Block>
          <Block flexDirection="row" margin={[0, 0, 6, 0]}>
            <Text mediumWeight color={colors[color]} style={{ marginRight: 8 }}>
              {title}
            </Text>
            <Text color={colors.darkGrey}>{author}</Text>
          </Block>

          <Text>{description}</Text>
        </Block>
      </Block>

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
      </Block>
    </Block>
  );
}

EventCard.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
  color: PropTypes.string,
  isFinished: PropTypes.bool,
};

EventCard.defaultProps = {
  isFinished: false,
};

export default EventCard;

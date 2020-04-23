import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '../../styles';
import Avatar from '../Avatar';
import Block from '../Block';
import Text from '../Text';

function AttendeeCard(props) {
  const { avatarSource, fullName, title, duty } = props;

  return (
    <Block
      flexDirection="row"
      alignItems="center"
      padding={[24, 0]}
      style={{
        borderBottomWidth: 1,
        borderBottomColor: colors.lightGrey,
      }}>
      <Avatar source={avatarSource} style={{ marginRight: 16 }} />

      <Block>
        <Block flexDirection="row" alignItems="center">
          <Text mediumWeight style={{ marginBottom: 4 }}>
            {fullName}
          </Text>
          {duty && (
            <Block
              justifyContent="center"
              alignItems="center"
              margin={[0, 0, 0, 6]}
              padding={[2, 6]}
              color={
                duty === 'ORGANIZER' ? colors.lightPurple : colors.lightGreen
              }
              radius={8}>
              <Text
                smallest
                mediumWeight
                uppercase
                color={
                  duty === 'ORGANIZER' ? colors.darkPurple : colors.darkGreen
                }>
                {duty}
              </Text>
            </Block>
          )}
        </Block>

        <Text color={colors.darkGrey} small>
          {title}
        </Text>
      </Block>
    </Block>
  );
}

AttendeeCard.propTypes = {
  avatarSource: PropTypes.any.isRequired,
  fullName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  duty: PropTypes.string,
};

AttendeeCard.defaultProps = {
  duty: null,
};

export default AttendeeCard;

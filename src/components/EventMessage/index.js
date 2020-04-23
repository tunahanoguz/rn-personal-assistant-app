import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Block from '../Block';
import Text from '../Text';
import { colors } from '../../styles';

function EventMessage(props) {
  const { title, description } = props;
  const navigation = useNavigation();

  function goToEvent() {
    navigation.navigate('Event');
  }

  return (
    <TouchableOpacity onPress={goToEvent}>
      <Block
        flexDirection="row"
        alignItems="center"
        padding={[16]}
        color={colors.white}
        style={{
          borderWidth: 1,
          borderColor: colors.lightGrey,
          borderTopStartRadius: 0,
          borderTopEndRadius: 20,
          borderBottomStartRadius: 20,
          borderBottomEndRadius: 20,
        }}>
        <Block
          margin={[0, 16, 0, 0]}
          padding={[21, 16]}
          color={colors.lightPurple}
          style={{ borderRadius: 20 }}>
          <Image
            source={require('../../assets/icons/mail-icon.png')}
            style={{ width: 38, height: 28 }}
          />
        </Block>

        <Block>
          <Text
            mediumWeight
            color={colors.extraDarkGrey}
            style={{ marginBottom: 4 }}>
            {title}
          </Text>
          <Text small color={colors.darkGrey}>
            {description}
          </Text>
        </Block>
      </Block>
    </TouchableOpacity>
  );
}

export default EventMessage;

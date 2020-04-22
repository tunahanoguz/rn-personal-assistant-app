import React from 'react';
import { Image } from 'react-native';
import { Block, Text } from '../../components';
import { colors } from '../../styles';
import Message from '../../components/Message';

function Conversation() {
  return (
    <Block flex={1} color={colors.background} padding={[35]}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={{ width: 80, height: 80 }}
      />

      <Message text="GM Paolo, how can help you today?" />
      <Message
        isSent={true}
        text="Show me Nikolas email from last month, the one which talk about the Summer Design Event in Seattle"
      />
      <Message text="Sure, sending it right now..." />
    </Block>
  );
}

export default Conversation;

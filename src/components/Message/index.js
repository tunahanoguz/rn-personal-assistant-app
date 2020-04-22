import React from 'react';
import { View } from 'react-native';
import Text from '../Text';
import style from './styles';

function Message(props) {
  const { isSent, text } = props;

  const messageStyle = [style.message, !isSent && style.isNotSentMessage];
  const textStyle = [isSent && style.isSentText];

  return (
    <View style={messageStyle}>
      <Text style={textStyle}>{text}</Text>
    </View>
  );
}

export default Message;

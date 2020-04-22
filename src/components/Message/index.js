import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Text from '../Text';
import style from './styles';

function Message(props) {
  const { isSent, text } = props;

  const messageStyle = [style.message, !isSent && style.isNotSentMessage];
  const textStyle = [isSent && style.isSentText, { lineHeight: 22 }];

  return (
    <View style={messageStyle}>
      <Text style={textStyle}>{text}</Text>
    </View>
  );
}

Message.propTypes = {
  isSent: PropTypes.bool,
  text: PropTypes.string,
};

Message.defaultProps = {
  isSent: false,
};

export default Message;

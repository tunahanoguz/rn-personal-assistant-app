import React, { useState } from 'react';
import { Image } from 'react-native';
import {
  Block,
  Text,
  Message,
  EventMessage,
  Button,
  Input,
} from '../../components';
import { colors } from '../../styles';
import { messages } from '../../constants';
import styles from './styles';

function Conversation() {
  const [message, setMessage] = useState('');
  const [messageInputColor, setMessageInputColor] = useState('transparent');
  const [messageInputTextColor, setMessageInputTextColor] = useState(
    colors.darkPurple,
  );
  const [messageInputBorderColor, setMessageInputBorderColor] = useState(
    colors.darkPurple,
  );

  function onMessageInputFocus() {
    setMessageInputColor(colors.red);
    setMessageInputTextColor(colors.white);
    setMessageInputBorderColor('transparent');
  }

  return (
    <Block flex={1} color={colors.background} padding={[24]}>
      <Block flex={0.8}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
        />

        {messages.map((_message) => {
          const { id, text, isSent } = _message;
          return <Message key={id} text={text} isSent={isSent} />;
        })}

        <EventMessage
          title="Seattle PR Plan - L..."
          description="Sep 2nd at 2:05PM"
        />
      </Block>

      <Block flex={0.2} style={styles.messageButtons}>
        <Block flexDirection="row" justifyContent="flex-end">
          <Button
            bgColor={messageInputColor}
            borderColor={messageInputBorderColor}
            isHorizontalPadding={true}
            style={styles.messageButton}>
            <Text color={messageInputTextColor}>Flag</Text>
          </Button>

          <Button
            bgColor={messageInputColor}
            borderColor={messageInputBorderColor}
            isHorizontalPadding={true}
            style={styles.messageButton}>
            <Text color={messageInputTextColor}>Reply</Text>
          </Button>

          <Button
            bgColor={messageInputColor}
            borderColor={messageInputBorderColor}
            isHorizontalPadding={true}>
            <Text color={messageInputTextColor}>Forward</Text>
          </Button>
        </Block>

        <Input
          value={message}
          placeholder="Work email address"
          isBordered={true}
          isShadow={false}
          isMultiline={true}
          autoComplete="off"
          autoCompleteType="off"
          autoCapitalize="none"
          autoCorrect={false}
          setValue={setMessage}
          onFocus={onMessageInputFocus}
          style={styles.input}>
          <Button style={styles.sendButton}>
            <Image source={require('../../assets/icons/up-icon.png')} />
          </Button>
        </Input>
      </Block>
    </Block>
  );
}

export default Conversation;

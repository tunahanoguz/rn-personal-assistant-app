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
          style={{ width: 80, height: 80 }}
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

      <Block
        flex={0.2}
        style={{ position: 'absolute', left: 24, right: 24, bottom: 24 }}>
        <Block flexDirection="row" justifyContent="flex-end">
          <Button
            bgColor={messageInputColor}
            borderColor={messageInputBorderColor}
            isHorizontalPadding={true}
            style={{ marginRight: 8 }}>
            <Text color={messageInputTextColor}>Flag</Text>
          </Button>

          <Button
            bgColor={messageInputColor}
            borderColor={messageInputBorderColor}
            isHorizontalPadding={true}
            style={{ marginRight: 8 }}>
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
          style={{ width: '80%' }}>
          <Button
            style={{
              position: 'absolute',
              top: 3.2,
              right: 8,
              paddingHorizontal: 18,
            }}>
            <Image source={require('../../assets/icons/up-icon.png')} />
          </Button>
        </Input>
      </Block>
    </Block>
  );
}

export default Conversation;

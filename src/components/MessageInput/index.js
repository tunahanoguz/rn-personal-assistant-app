import React from 'react';
import Button from '../Button';
import { Image } from 'react-native';
import Input from '../Input';

function MessageInput(props) {
  const { value, setValue } = props;

  return (
    <Input
      value={value}
      placeholder="Work email address"
      isBordered={true}
      isShadow={false}
      autoComplete="off"
      autoCompleteType="off"
      autoCapitalize="none"
      autoCorrect={false}
      setValue={setValue}>
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
  );
}

export default MessageInput;

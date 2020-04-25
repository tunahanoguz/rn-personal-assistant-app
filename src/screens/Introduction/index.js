import * as React from 'react';
import { Image, StatusBar } from 'react-native';
import { Block, Text, Button } from '../../components';
import { colors } from '../../styles';
import styles from './styles';

function Introduction({ navigation }) {
  function goToConversation() {
    navigation.navigate('Conversation');
  }

  function goToSignIn() {
    navigation.navigate('SignIn');
  }

  return (
    <Block
      flex={1}
      justifyContent="center"
      padding={[35]}
      color={colors.background}>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
      />

      <Text color={colors.darkPurple} extraLarge boldWeight align="center">
        every.
      </Text>

      <Text medium align="center" style={styles.description}>
        Your everyday personal assistant.
      </Text>

      <Button pressFunc={goToConversation}>
        <Text color="white" medium boldWeight>
          Get started
        </Text>
      </Button>

      <Button
        bgColor="white"
        style={styles.signInButton}
        pressFunc={goToSignIn}>
        <Text color={colors.darkPurple} medium boldWeight>
          Login
        </Text>
      </Button>

      <Block flexDirection="row" justifyContent="center">
        <Text extraSmall>New around here?</Text>

        <Text extraSmall boldWeight color={colors.darkPurple}>
          {' '}
          Sign in
        </Text>
      </Block>
    </Block>
  );
}

export default Introduction;

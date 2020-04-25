import React, { useState } from 'react';
import { Image } from 'react-native';
import { Block, Button, Input, Text } from '../../components';
import { colors } from '../../styles';
import styles from './styles';

function SignIn() {
  const [email, setEmail] = useState('');

  return (
    <Block flex={1} color={colors.background}>
      <Block flex={0.8} justifyContent="center" padding={[35]}>
        <Text large boldWeight align="center">
          Sign In
        </Text>

        <Button bgColor="white" style={styles.appleButton}>
          <Image
            source={require('../../assets/icons/apple-icon.png')}
            style={styles.buttonIcon}
          />
          <Text boldWeight>Sign in with Apple</Text>
        </Button>

        <Button bgColor="white" style={styles.googleButton}>
          <Image
            source={require('../../assets/icons/google-icon.png')}
            style={styles.buttonIcon}
          />
          <Text boldWeight color={colors.blue}>
            Sign in with Google
          </Text>
        </Button>

        <Text extraSmall color={colors.darkGrey} align="center">
          or get a link emailed to you
        </Text>

        <Input
          value={email}
          placeholder="Work email address"
          keyboardType="email-address"
          autoComplete="off"
          autoCompleteType="off"
          autoCapitalize="none"
          autoCorrect={false}
          setValue={setEmail}
        />

        <Button style={styles.signUpLink}>
          <Text boldWeight color={colors.white}>
            Email me a signup link
          </Text>
        </Button>
      </Block>

      <Block flex={0.2} justifyContent="center" style={styles.termsContainer}>
        <Text extraSmall align="center">
          You are completely safe.
        </Text>
        <Text
          extraSmall
          boldWeight
          align="center"
          color={colors.darkPurple}
          style={styles.termsText}>
          Read our Terms & Conditions.
        </Text>
      </Block>
    </Block>
  );
}

export default SignIn;

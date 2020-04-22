import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { colors } from '../../styles';

function Input(props) {
  const { value, placeholder } = props;
  return <TextInput placeholder={placeholder} value={value} style={styles} />;
}

const styles = StyleSheet.create({
  paddingVertical: 16,
  backgroundColor: colors.white,
  borderWidth: 1,
  borderColor: colors.darkGrey,
  fontFamily: 'CircularStd-Book',
  fontSize: 20,
  color: colors.darkGrey,
});

Input.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Input;

import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { colors } from '../../styles';

function Input(props) {
  const {
    value,
    placeholder,
    keyboardType,
    setValue,
    onFocus,
    isBordered,
    isShadow,
    isMultiline,
    style,
    children,
  } = props;
  return (
    <View
      style={[
        styles.outer,
        isBordered && styles.border,
        isShadow && styles.shadow,
      ]}>
      <TextInput
        placeholder={placeholder}
        value={value}
        keyboardType={keyboardType}
        multiline={isMultiline}
        onChangeText={(text) => setValue(text)}
        onFocus={onFocus}
        style={[styles.input, style]}
      />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    marginTop: 16,
    paddingVertical: 2,
    paddingLeft: 24,
    backgroundColor: colors.white,
    borderRadius: 24,
  },
  input: {
    fontFamily: 'CircularStd-Book',
    fontSize: 20,
    color: colors.darkGrey,
  },
  border: {
    borderWidth: 1,
    borderColor: colors.lightGrey,
  },
  shadow: {
    shadowColor: '#4E4F72',
    shadowOpacity: 0.08,
    shadowRadius: 60,
    shadowOffset: { width: 0, height: 4 },
    elevation: 60,
  },
});

Input.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  keyboardType: PropTypes.string,
  multiline: PropTypes.bool,
  setValue: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  isBordered: PropTypes.bool,
  isShadow: PropTypes.bool,
};

Input.defaultProps = {
  keyboardType: 'default',
  multiline: false,
  isBordered: false,
  isShadow: true,
};

export default Input;

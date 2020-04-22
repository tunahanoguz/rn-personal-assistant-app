import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { colors } from '../../styles';

function Input(props) {
  const { value, placeholder, keyboardType, setValue, isBordered } = props;
  return (
    <View style={[styles.outer, isBordered && styles.border]}>
      <TextInput
        placeholder={placeholder}
        value={value}
        keyboardType={keyboardType}
        onChangeText={(text) => setValue(text)}
        style={styles.input}
      />
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
    shadowColor: '#4E4F72',
    shadowOpacity: 0.08,
    shadowRadius: 60,
    shadowOffset: { width: 0, height: 4 },
    elevation: 60,
  },
  input: {
    fontFamily: 'CircularStd-Book',
    fontSize: 20,
    color: colors.darkGrey,
  },
  border: {
    borderWidth: 1,
    borderColor: colors.darkGrey,
  },
});

Input.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  keyboardType: PropTypes.string,
  setValue: PropTypes.func.isRequired,
  isBordered: PropTypes.bool,
};

Input.defaultProps = {
  keyboardType: 'default',
  isBordered: false,
};

export default Input;

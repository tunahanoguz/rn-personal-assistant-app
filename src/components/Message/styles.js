import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const style = StyleSheet.create({
  message: {
    marginVertical: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: colors.darkPurple,
    borderTopStartRadius: 20,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
  },
  isNotSentMessage: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderTopStartRadius: 0,
    borderTopEndRadius: 20,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
  },
  isSentText: {
    color: colors.white,
  },
});

export default style;

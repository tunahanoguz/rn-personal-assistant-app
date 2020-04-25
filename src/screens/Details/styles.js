import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  leftIcon: { marginRight: 20 },
  titleTabArea: {
    borderTopWidth: 1,
    borderTopColor: colors.lightGrey,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
  },
  tabItem: { marginLeft: 24 },
});

export default styles;

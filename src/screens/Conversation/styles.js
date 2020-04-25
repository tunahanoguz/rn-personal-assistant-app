import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  logo: { width: 80, height: 80 },
  messageButtons: { position: 'absolute', left: 24, right: 24, bottom: 24 },
  messageButton: { marginRight: 8 },
  input: { width: '80%' },
  sendButton: {
    position: 'absolute',
    top: 3.2,
    right: 8,
    paddingHorizontal: 18,
  },
});

export default styles;

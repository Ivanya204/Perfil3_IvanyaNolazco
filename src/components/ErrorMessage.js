import { StyleSheet, Text, View } from 'react-native';

import PrimaryButton from './PrimaryButton';
import { colors, fonts } from '../constants/theme';

export default function ErrorMessage({ message, onRetry }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ups, algo salió mal</Text>
      <Text style={styles.message}>{message}</Text>
      {onRetry && <PrimaryButton title="Reintentar" onPress={onRetry} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: colors.background,
  },
  title: {
    fontFamily: fonts.black,
    fontSize: 22,
    color: colors.text,
  },
  message: {
    fontFamily: fonts.regular,
    fontSize: 15,
    color: colors.muted,
    textAlign: 'center',
    marginVertical: 12,
  },
});

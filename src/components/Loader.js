import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../constants/theme';

export default function Loader({ message = 'Cargando...' }) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.primary} />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  text: {
    marginTop: 12,
    fontFamily: fonts.semibold,
    fontSize: 15,
    color: colors.muted,
  },
});

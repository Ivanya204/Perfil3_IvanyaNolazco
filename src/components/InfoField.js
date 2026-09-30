import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts, radius } from '../constants/theme';

export default function InfoField({ label, value }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.field}>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  label: {
    fontFamily: fonts.bold,
    fontSize: 13,
    color: colors.label,
    marginBottom: 4,
  },
  field: {
    backgroundColor: colors.field,
    borderRadius: radius.sm,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  value: {
    fontFamily: fonts.regular,
    fontSize: 15,
    color: colors.text,
  },
});

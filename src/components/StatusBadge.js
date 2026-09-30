import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../constants/theme';

const STATUS_COLORS = {
  Alive: colors.alive,
  Dead: colors.dead,
};

export default function StatusBadge({ status, label }) {
  const color = STATUS_COLORS[status] ?? colors.unknown;

  return (
    <View style={styles.row}>
      <View style={[styles.dot, { backgroundColor: color }]} />
      <Text style={styles.text}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 9,
    height: 9,
    borderRadius: 5,
    marginRight: 6,
  },
  text: {
    fontFamily: fonts.semibold,
    fontSize: 13,
    color: colors.label,
  },
});

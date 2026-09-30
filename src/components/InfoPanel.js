import { StyleSheet, View } from 'react-native';
import { colors, radius } from '../constants/theme';

export default function InfoPanel({ children, style }) {
  return <View style={[styles.panel, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  panel: {
    backgroundColor: colors.panel,
    borderRadius: radius.md,
    paddingHorizontal: 14,
    paddingTop: 14,
    paddingBottom: 4,
  },
});

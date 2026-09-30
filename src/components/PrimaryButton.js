import { Pressable, StyleSheet, Text } from 'react-native';
import { colors, fonts, radius } from '../constants/theme';

export default function PrimaryButton({ title, onPress, style }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: pressed ? colors.primaryPressed : colors.primary },
        style,
      ]}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: radius.sm,
    paddingHorizontal: 26,
    paddingVertical: 12,
    alignItems: 'center',
  },
  text: {
    fontFamily: fonts.bold,
    fontSize: 17,
    color: colors.white,
  },
});

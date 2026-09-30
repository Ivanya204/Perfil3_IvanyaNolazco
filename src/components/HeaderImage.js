import { Image, StyleSheet, useWindowDimensions } from 'react-native';

const ASPECT = 390 / 640;

export default function HeaderImage({ source = require('../../assets/header-chococat.png'), style }) {
  const { width } = useWindowDimensions();

  return (
    <Image
      source={source}
      style={[styles.image, { width, height: width * ASPECT }, style]}
      resizeMode="cover"
    />
  );
}

const styles = StyleSheet.create({
  image: {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
});

import { Image, StyleSheet, Text, View } from 'react-native';

import InfoPanel from './InfoPanel';
import StatusBadge from './StatusBadge';
import { colors, fonts, radius } from '../constants/theme';

export default function CharacterCard({ character }) {
  const { name, image, status, statusLabel, species, gender, origin } = character;

  return (
    <InfoPanel style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={1}>
          {name}
        </Text>
        <StatusBadge status={status} label={`${statusLabel} · ${species}`} />
        <View style={styles.field}>
          <Text style={styles.label}>Género</Text>
          <Text style={styles.value}>{gender}</Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Origen</Text>
          <Text style={styles.value} numberOfLines={1}>
            {origin}
          </Text>
        </View>
      </View>
    </InfoPanel>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 12,
    marginBottom: 12,
  },
  image: {
    width: 104,
    height: 104,
    borderRadius: radius.sm,
    backgroundColor: colors.field,
  },
  info: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'space-between',
  },
  name: {
    fontFamily: fonts.black,
    fontSize: 17,
    color: colors.text,
  },
  field: {
    backgroundColor: colors.field,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginTop: 4,
  },
  label: {
    fontFamily: fonts.bold,
    fontSize: 10,
    color: colors.muted,
  },
  value: {
    fontFamily: fonts.regular,
    fontSize: 13,
    color: colors.text,
  },
});

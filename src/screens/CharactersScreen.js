import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import CharacterCard from '../components/CharacterCard';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import { useCharacters } from '../hooks/useCharacters';
import { colors, fonts } from '../constants/theme';

export default function CharactersScreen() {
  const { characters, loading, refreshing, error, retry, refresh } = useCharacters();

  if (loading) return <Loader message="Cargando personajes..." />;
  if (error) return <ErrorMessage message={error} onRetry={retry} />;

  return (
    <SafeAreaView style={styles.safe} edges={['bottom']}>
      <FlatList
        data={characters}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <CharacterCard character={item} />}
        contentContainerStyle={styles.list}
        refreshing={refreshing}
        onRefresh={refresh}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.title}>Personajes</Text>
            <Text style={styles.subtitle}>{characters.length} personajes encontrados</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  header: {
    marginBottom: 12,
  },
  title: {
    fontFamily: fonts.black,
    fontSize: 30,
    color: colors.text,
  },
  subtitle: {
    fontFamily: fonts.semibold,
    fontSize: 14,
    color: colors.muted,
  },
});

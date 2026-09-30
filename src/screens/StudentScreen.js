import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import HeaderImage from '../components/HeaderImage';
import InfoPanel from '../components/InfoPanel';
import InfoField from '../components/InfoField';
import PrimaryButton from '../components/PrimaryButton';
import { useStudent } from '../hooks/useStudent';
import { colors, fonts } from '../constants/theme';

export default function StudentScreen({ navigation }) {
  const { fields } = useStudent();

  return (
    <SafeAreaView style={styles.safe} edges={['bottom']}>
      <ScrollView contentContainerStyle={styles.content}>
        <HeaderImage />

        <View style={styles.body}>
          <Text style={styles.title}>Alumna</Text>

          <InfoPanel>
            {fields.map((field) => (
              <InfoField key={field.label} label={field.label} value={field.value} />
            ))}
          </InfoPanel>

          <PrimaryButton
            title="Siguiente"
            onPress={() => navigation.navigate('Characters')}
            style={styles.button}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flexGrow: 1,
  },
  body: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  title: {
    fontFamily: fonts.black,
    fontSize: 30,
    color: colors.text,
    marginTop: 14,
    marginBottom: 14,
  },
  button: {
    alignSelf: 'flex-end',
    marginTop: 18,
  },
});

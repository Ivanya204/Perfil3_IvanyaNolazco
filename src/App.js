import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppNavigator from './navigation/AppNavigator';
import { useAppFonts } from './hooks/useAppFonts';

export default function App() {
  const ready = useAppFonts();

  if (!ready) return null;

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <AppNavigator />
    </SafeAreaProvider>
  );
}

import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import {
  useFonts,
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
} from '@expo-google-fonts/nunito';

SplashScreen.preventAutoHideAsync();

// Mantiene el splash (Master Ball) visible hasta que las fuentes estén listas.
export function useAppFonts() {
  const [loaded, error] = useFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
  });

  const ready = loaded || !!error;

  useEffect(() => {
    if (ready) SplashScreen.hideAsync();
  }, [ready]);

  return ready;
}

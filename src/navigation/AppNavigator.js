import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StudentScreen from '../screens/StudentScreen';
import CharactersScreen from '../screens/CharactersScreen';
import { colors, fonts } from '../constants/theme';

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, background: colors.background },
};

export default function AppNavigator() {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        initialRouteName="Student"
        screenOptions={{
          animation: 'slide_from_right',
          headerStyle: { backgroundColor: colors.background },
          headerTintColor: colors.text,
          headerShadowVisible: false,
          headerTitleStyle: { fontFamily: fonts.black, fontSize: 20 },
          contentStyle: { backgroundColor: colors.background },
        }}
      >
        <Stack.Screen name="Student" component={StudentScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name="Characters"
          component={CharactersScreen}
          options={{ title: 'Rick and Morty' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

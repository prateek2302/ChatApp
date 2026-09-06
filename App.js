import React from 'react';
import {NavigationContainer, DefaultTheme, DarkTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar, useColorScheme} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ChatListScreen from './src/screens/ChatListScreen';
import ChatScreen from './src/screens/ChatScreen';
import ContactsScreen from './src/screens/ContactsScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const scheme = useColorScheme();
  const isDark = scheme === 'dark';

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
        <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: isDark ? '#111' : '#075E54'},
            headerTintColor: '#fff',
            headerTitleStyle: {fontWeight: '700'},
            animation: 'slide_from_right',
          }}>
          <Stack.Screen
            name="ChatList"
            component={ChatListScreen}
            options={{title: 'ChatApp', headerLargeTitle: true}}
          />
          <Stack.Screen
            name="Chat"
            component={ChatScreen}
            options={({route}) => ({title: route.params?.name || 'Chat'})}
          />
          <Stack.Screen name="Contacts" component={ContactsScreen} options={{title: 'New Chat'}} />
          <Stack.Screen name="Profile" component={ProfileScreen} options={{title: 'Profile'}} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

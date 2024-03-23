import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

import StartScreen from './screens/start-screen';
import PDFCreate from './screens/create-screen';
import PDFEditor from './screens/edit-screen';

const MainFlowStack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <SafeAreaProvider>
        <MainFlowStack.Navigator screenOptions={{headerShown: false}}>
          <MainFlowStack.Screen name="StartScreen" component={StartScreen} />
          {/* @ts-ignore */}
          <MainFlowStack.Screen name="PDFEditor" component={PDFEditor} />
          <MainFlowStack.Screen name="PDFCreate" component={PDFCreate} />
        </MainFlowStack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default App;

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import BorderRadiusExampleScreen1 from './BorderRadiusExampleScreen1';
import BorderRadiusExampleScreen2 from './BorderRadiusExampleScreen2';

function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen
          name="BorderRadiusExampleScreen1"
          component={BorderRadiusExampleScreen1}
        />
        <Stack.Screen
          name="BorderRadiusExampleScreen2"
          component={BorderRadiusExampleScreen2}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

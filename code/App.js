import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CameraScreen from './screens/CameraScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={CameraScreen}
          options={{ headerTitle: 'THU Explorer' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

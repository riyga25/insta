import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Detail from '../screens/Detail';
import List from '../screens/List';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="List">
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={({route}) => ({title: route.params.symbol})}
        />
        <Stack.Screen
          name="List"
          component={List}
          options={{title: 'Quotes'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

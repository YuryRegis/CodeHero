import React from 'react'
import { View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import { Home } from '../pages'


const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen 
            name="Home" 
            component={Home}
            options={{
              headerShown: false
            }}
            />
          <Stack.Screen 
            name='CardHero' 
            component={Home} 
            options={{
                headerMode: 'screen',
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#D42026' }
            }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default StackNavigator
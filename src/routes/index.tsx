import React from 'react'
import { View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import { Home, CardHero } from '../pages'


const Stack = createStackNavigator();

function StackNavigator () {
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
            component={CardHero} 
            options={{
                title: 'Hero Details',
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
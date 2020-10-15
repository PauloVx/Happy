import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import { OrphanagesMap } from './pages/OrphanagesMap';

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator headerMode="none">
        <Screen name="OrphanagesMap" component={OrphanagesMap}/>
      </Navigator>
    </NavigationContainer>
  )
}
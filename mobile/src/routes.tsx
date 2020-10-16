import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import { Header } from './components/Header';
import { OrphanagesMap } from './pages/OrphanagesMap';
import { OrphanageDetails } from './pages/OrphanageDetails';

import { SelectMapPosition } from './pages/CreateOrphanage/SelectMapPosition';
import { OrphanageData } from './pages/CreateOrphanage/OrphanageData';

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#F2F3F5' } }}>
        <Screen name="OrphanagesMap" component={OrphanagesMap}/>

        <Screen
          name="OrphanageDetails"
          component={OrphanageDetails}
          options={{ headerShown: true, header: () => <Header title="Orfanato"/> }}
        />

        <Screen
          name="SelectMapPosition"
          component={SelectMapPosition}
          options={{ headerShown: true, header: () => <Header title="Selecione no mapa" showCancelBtn/> }}
        />

        <Screen
          name="OrphanageData"
          component={OrphanageData}
          options={{headerShown: true, header: () => <Header title="Informe os dados" showCancelBtn/>}}
        />
      </Navigator>
    </NavigationContainer>
  )
}
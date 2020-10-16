import React, { useState } from 'react';

import { Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { api } from '../services/api';

import { styles } from '../styles/orphanagesMap';
import { Feather } from '@expo/vector-icons';
import mapMarker from '../images/map-marker.png';
import { RectButton } from 'react-native-gesture-handler';

import { Orphanage } from '../types/Orphanage';

export function OrphanagesMap() {
  const navigation = useNavigation();

  const [orphanages, setOrphanages] = useState<Array<Orphanage>>([]);

  useFocusEffect(() => {
    api.get('/orphanages').then((response) => {
      setOrphanages(response.data);
    });
  });

  function handleNavigateToOrphanageDetails(orphanage: Orphanage) {
    navigation.navigate('OrphanageDetails', { orphanage });
  }

  function handleNavigateToOrphanageCreation() {
    navigation.navigate('SelectMapPosition');
  }

  return (
    <View style={styles.container}>
      <MapView 
        provider={PROVIDER_GOOGLE}
        style={styles.mapStyle}
        initialRegion={{
          latitude: -22.8507248,
          longitude: -43.2652029,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008
        }}
      >
        {
          orphanages.map(orphanage => {
            return (
              <Marker
                key={orphanage.id}
                icon={mapMarker}
                calloutAnchor={{
                  x: 2.7,
                  y: 0.8
                }}
                coordinate={{
                  latitude: orphanage.latitude,
                  longitude: orphanage.longitude
                }}
              >
                <Callout tooltip onPress={() => handleNavigateToOrphanageDetails(orphanage)}>
                  <View style={styles.calloutContainer}>
                    <Text style={styles.calloutText}>{orphanage.name}</Text>
                  </View>
                </Callout>
              </Marker>
            )
          })
        }
      </MapView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>{`${orphanages.length} Orfanatos encontrados`}</Text>
        <RectButton style={styles.createOrphanageButton} onPress={handleNavigateToOrphanageCreation}>
          <Feather name="plus" size={20} color="#FFF"/>
        </RectButton>
      </View>
    </View>
  );
}

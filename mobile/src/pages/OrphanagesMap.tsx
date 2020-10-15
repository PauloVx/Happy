import React from 'react';

import { Text, View, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

import { styles } from '../styles/orphanagesMap';

import { Feather } from '@expo/vector-icons';
import mapMarker from '../images/map-marker.png';


export function OrphanagesMap() {
  const navigation = useNavigation();

  function handleNavigateToOrphanageDetails() {
    navigation.navigate('OrphanageDetails');
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
        <Marker 
          icon={mapMarker}
          calloutAnchor={{
            x: 2.7,
            y: 0.8
          }}
          coordinate={{
            latitude: -22.8507248,
            longitude: -43.2652029
          }}
        >
          <Callout tooltip onPress={handleNavigateToOrphanageDetails}>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>Orph Name</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>2 Orfanatos encontrados</Text>
        <TouchableOpacity style={styles.createOrphanageButton} onPress={() => {alert('PLACEHOLDER')}}>
          <Feather name="plus" size={20} color="#FFF"/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

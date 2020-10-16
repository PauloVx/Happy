import React, { useState } from 'react';
import { View, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import MapView, { Marker, MapEvent } from 'react-native-maps';

import { styles } from '../../styles/selectMapPosition';

import mapMarkerImg from '../../images/map-marker.png';

export function SelectMapPosition() {
  const navigation = useNavigation();

  const [position, setPosition] = useState({latitude: 0, longitude: 0});

  function handleNextStep() {
    navigation.navigate('OrphanageData', { position });
  }

  function handleSelectMapPosition(e: MapEvent) {
    setPosition(e.nativeEvent.coordinate);
  }

  return (
    <View style={styles.container}>
      <MapView 
        initialRegion={{
          latitude: -22.9138851,
          longitude: -43.7261746,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
        style={styles.mapStyle}
        onPress={handleSelectMapPosition}
      >
        {
          position.latitude !== 0 ? (
            <Marker 
              icon={mapMarkerImg}
              coordinate={position}
            />
          ) : (null)
        }
      </MapView>

      {
        position.latitude !== 0 && (
          <RectButton style={ styles.nextButton } onPress={handleNextStep}>
            <Text style={ styles.nextButtonText }>Próximo</Text>
          </RectButton>
        )
      }
    </View>
  )
}
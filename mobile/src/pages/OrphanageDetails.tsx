import React from 'react';

import { styles } from '../styles/orphanageDetails';
import { Image, View, ScrollView, Text, TouchableOpacity, Linking } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';

import mapMarkerImg from '../images/map-marker.png';
import { Orphanage } from '../types/Orphanage';

interface OrphanageDetailsRouteParams {
  orphanage: Orphanage
}

export function OrphanageDetails() {
  const route = useRoute();
  const params = route.params as OrphanageDetailsRouteParams;
  const orphanage = params.orphanage;

  function handleOpenMapRoutes() {
    Linking.openURL(`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${ orphanage.longitude}`);
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imagesContainer}>
        <ScrollView horizontal pagingEnabled>
          {
            orphanage.images.map(img => {
              return (
                <Image key={img.id} style={styles.image} source={{ uri: img.url }} />
              )
            })
          }
        </ScrollView>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{orphanage.name}</Text>
        <Text style={styles.description}>{orphanage.about}</Text>
      
        <View style={styles.mapContainer}>
          <MapView 
            initialRegion={{
              latitude: orphanage.latitude,
              longitude: orphanage.longitude,
              latitudeDelta: 0.008,
              longitudeDelta: 0.008,
            }} 
            zoomEnabled={false}
            pitchEnabled={false}
            scrollEnabled={false}
            rotateEnabled={false}
            style={styles.mapStyle}
          >
            <Marker 
              icon={mapMarkerImg}
              coordinate={{ 
                latitude: orphanage.latitude,
                longitude: orphanage.longitude
              }}
            />
          </MapView>

          <TouchableOpacity style={styles.routesContainer} onPress={handleOpenMapRoutes}>
            <Text style={styles.routesText}>Ver rotas no Google Maps</Text>
          </TouchableOpacity>
        </View>
      
        <View style={styles.separator} />

        <Text style={styles.title}>Instruções para visita</Text>
        <Text style={styles.description}>{orphanage.instructions}</Text>

        <View style={styles.scheduleContainer}>
          <View style={[styles.scheduleItem, styles.scheduleItemBlue]}>
            <Feather name="clock" size={40} color="#2AB5D1" />
            <Text style={[styles.scheduleText, styles.scheduleTextBlue]}>Segunda à Sexta {orphanage.opening_hours}</Text>
          </View>
          {
            orphanage.open_on_weekends ? (
              <View style={[styles.scheduleItem, styles.scheduleItemGreen]}>
                <Feather name="info" size={40} color="#39CC83" />
                <Text style={[styles.scheduleText, styles.scheduleTextGreen]}>Atendemos fim de semana</Text>
              </View>
            ) : (
              <View style={[styles.scheduleItem, styles.scheduleItemRed]}>
                <Feather name="info" size={40} color="#FF669D" />
                <Text style={[styles.scheduleText, styles.scheduleText]}>Não atendemos fim de semana</Text>
              </View>
            )
          }
        </View>
      </View>
    </ScrollView>
  )
}
import React from 'react';

import { View, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'

import { useNavigation } from '@react-navigation/native';

import { styles } from '../styles/header';

interface HeaderProps {
  title: string,
  showCancelBtn?: boolean
}

export function Header({title, showCancelBtn = false}: HeaderProps) {
  const navigation = useNavigation();
  
  function handleNavigateBack() {
    navigation.goBack();
  }
  
  function handleNavigateToHome() {
    navigation.navigate('OrphanagesMap');
  }

  return (
    <View style={styles.container}>
      <BorderlessButton onPress={handleNavigateBack}>
        <Feather name="arrow-left" size={24} color="#15B6D6"/>
      </BorderlessButton>

      <Text style={styles.title}>{title}</Text>

      {
        showCancelBtn ? (
          <BorderlessButton onPress={handleNavigateToHome}>
            <Feather name="x" size={24} color="#FF669D"/>
          </BorderlessButton>
        ) : (<View />)
      }
    </View>
  )
}
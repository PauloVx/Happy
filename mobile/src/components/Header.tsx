import React from 'react';

import { View, Text } from 'react-native';

import { styles } from '../styles/header';

interface HeaderProps {
  title: string;
}

export function Header(props: HeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  )
}
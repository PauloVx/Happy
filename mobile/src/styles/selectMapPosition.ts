import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },

  mapStyle: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },

  nextButton: {
    backgroundColor: '#15c3d6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,

    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 40,
  },

  nextButtonText: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
    color: '#FFF',
  }
})
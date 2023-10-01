import React, {useEffect} from 'react';
import {StatusBar, View, Image, StyleSheet} from 'react-native';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('onBoarDing1');
    }, 3000);
    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.T}>
      <StatusBar hidden={false} />
      <Image source={require('../../media/Frame222.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  T: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 200,
    height: 150,
  },
});

export default SplashScreen;

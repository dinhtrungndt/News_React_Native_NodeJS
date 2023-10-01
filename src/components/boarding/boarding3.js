import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const OnBoarDing3 = props => {
  const {navigation} = props;
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Image
          style={{width: 400, height: 500}}
          source={require('../../../media/boarding3.png')}
        />
        <View style={styles.body}>
          <Text
            style={{
              width: 279,
              height: 72,
              fontWeight: '700',
              fontSize: 24,
              lineHeight: 36,
              letterSpacing: 0.12,
              color: '#000000',
            }}>
            Lorem Ipsum is simply dummy
          </Text>
          <Text
            style={{
              width: 318,
              height: 48,
              fontWeight: '400',
              fontSize: 16,
              lineHeight: 24,
              letterSpacing: 0.12,
              color: '#4E4B66',
            }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
        </View>
        {/* footer  */}
        <View style={styles.footer}>
          <Image
            style={{
              width: 53,
              height: 14,
              gap: 5,
            }}
            source={require('../../../media/icon_next3.png')}
          />
          <View style={{flexDirection: 'row', paddingLeft: 95}}>
            <Text
              style={styles.back}
              onPress={() => navigation.navigate('onBoarDing2')}>
              Back
            </Text>
            <TouchableOpacity
              style={styles.TouOp_footer}
              activeOpacity={0.5}
              onPress={() => navigation.navigate('LoginScreens')}>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>
                Get Started
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnBoarDing3;

const styles = StyleSheet.create({
  back: {
    color: '#B0B3B8',
    fontWeight: 'bold',
    fontSize: 16,
    top: 14,
  },
  TouOp_footer: {
    width: 142,
    height: 50,
    backgroundColor: '#1877F2',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    left: 10,
  },
  footer: {
    flexDirection: 'row',
    gap: 10,
    paddingTop: 135,
    paddingLeft: 24,
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 24,
    paddingTop: 80,
  },

  header: {
    flex: 1,
  },
});

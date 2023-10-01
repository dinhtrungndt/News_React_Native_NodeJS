import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';

const TrendingScreens = props => {
  const {navigation} = props;

  return (
    <View style={styles.T}>
      {/* header  */}
      <View style={styles.header}>
        <View style={styles.back_trending}>
          <TouchableOpacity onPress={() => navigation.navigate('MainScreens')}>
            <Image
              source={require('../../../../media/back.png')}
              style={styles.back}
            />
          </TouchableOpacity>
          <Text
            style={{
              width: 74,
              height: 24,
              fontSize: 16,
              fontWeight: '600',
              color: '#000',
            }}>
            Trending
          </Text>
          <Image source={require('../../../../media/3cham.png')} />
        </View>
      </View>
      {/* body  */}
      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* List 1 */}
          <View>
            <Image
              style={{
                width: 345,
                height: 183,
                borderRadius: 7,
                paddingTop: 0,
                marginTop: 15,
              }}
              source={require('../../../../media/trending_russian.png')}
            />
            <Text style={{paddingTop: 5}}>Europe</Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '400',
                color: '#000',
                paddingTop: 5,
              }}>
              Russian warship: Moskva sinks in Black Sea
            </Text>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Image source={require('../../../../media/icon_bbcNews.png')} />
              <Text
                style={{
                  paddingLeft: 5,
                  color: '#4E4B66',
                  fontSize: 13,
                  fontWeight: '600',
                }}>
                BBC News
              </Text>
              <Image
                style={{
                  marginLeft: 15,
                  top: 4,
                }}
                source={require('../../../../media/icon_clock.png')}
              />
              <Text
                style={{
                  marginLeft: 4,
                  fontSize: 13,
                  fontWeight: '400',
                  color: '#4E4B66',
                }}>
                4h ago
              </Text>
              <Text style={{paddingHorizontal: 160, color: '#000'}}>...</Text>
            </View>
          </View>

          {/* List 2 */}
          <View style={{paddingTop: 10}}>
            <Image
              style={{
                width: 345,
                height: 183,
                borderRadius: 7,
                paddingTop: 0,
                marginTop: 15,
              }}
              source={require('../../../../media/trending_Ukraine.png')}
            />
            <Text style={{paddingTop: 5}}>Europe</Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '400',
                color: '#000',
                paddingTop: 5,
              }}>
              Ukraine's President Zelensky to BBC: Blood money being paid for
              Russian oil
            </Text>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Image source={require('../../../../media/icon_bbcNews.png')} />
              <Text
                style={{
                  paddingLeft: 5,
                  color: '#4E4B66',
                  fontSize: 13,
                  fontWeight: '600',
                }}>
                BBC News
              </Text>
              <Image
                style={{
                  marginLeft: 15,
                  top: 4,
                }}
                source={require('../../../../media/icon_clock.png')}
              />
              <Text
                style={{
                  marginLeft: 4,
                  fontSize: 13,
                  fontWeight: '400',
                  color: '#4E4B66',
                }}>
                14m ago
              </Text>
              <Text style={{paddingHorizontal: 160, color: '#000'}}>...</Text>
            </View>
          </View>

          {/* List 3 */}
          <View style={{paddingTop: 10, paddingBottom: 100}}>
            <Image
              style={{
                width: 345,
                height: 183,
                borderRadius: 7,
                paddingTop: 0,
                marginTop: 15,
              }}
              source={require('../../../../media/trending_her.png')}
            />
            <Text style={{paddingTop: 5}}>Europe</Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '400',
                color: '#000',
                paddingTop: 5,
              }}>
              Her train broke down. Her phone died. And then she met her future
              husband
            </Text>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Image source={require('../../../../media/cnn_logo.png')} />
              <Text
                style={{
                  paddingLeft: 5,
                  color: '#4E4B66',
                  fontSize: 13,
                  fontWeight: '600',
                }}>
                CNN
              </Text>
              <Image
                style={{
                  marginLeft: 15,
                  top: 4,
                }}
                source={require('../../../../media/icon_clock.png')}
              />
              <Text
                style={{
                  marginLeft: 4,
                  fontSize: 13,
                  fontWeight: '400',
                  color: '#4E4B66',
                }}>
                1h ago
              </Text>
              <Text style={{paddingHorizontal: 160, color: '#000'}}>...</Text>
            </View>
          </View>
        </ScrollView>
      </View>

      {/* footer */}
      <View style={styles.footer}>
        <View style={styles.footerItem}>
          <Image source={require('../../../../media/icon_home.png')} />
          <Text style={[(styles.footerText, {color: '#1877F2'})]}>Home</Text>
        </View>
        <View style={styles.footerItem}>
          <Image source={require('../../../../media/icon_explore.png')} />
          <Text style={styles.footerText}>Explore</Text>
        </View>
        <View style={styles.footerItem}>
          <Image source={require('../../../../media/icon_bookmark.png')} />
          <Text style={styles.footerText}>Bookmark</Text>
        </View>
        <View style={styles.footerItem}>
          <Image source={require('../../../../media/icon_profile.png')} />
          <Text style={styles.footerText}>Profile</Text>
        </View>
      </View>
    </View>
  );
};

export default TrendingScreens;

const styles = StyleSheet.create({
  // footer
  footer: {
    width: 400,
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around', // Thay đổi giá trị thành 'space-around'
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingBottom: 16,
    bottom: 0,
    position: 'absolute',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderTopColor: '#D7DBDD',
  },
  footerItem: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    top: 10,
  },
  footerText: {
    color: '#4E4B66',
    fontSize: 14,
    marginTop: 4,
    fontWeight: '400',
  },
  // header
  back: {
    width: 16,
    height: 15.56,
    top: 4.22,
    left: 4,
  },
  back_trending: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  T: {
    width: '100%',
    height: '100%',
    padding: 24,
  },
});

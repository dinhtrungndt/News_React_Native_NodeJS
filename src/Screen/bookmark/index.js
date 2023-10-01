import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';

const BookmarkScreens = props => {
  const {navigation} = props;
  return (
    <View style={styles.T}>
      <View style={styles.header}>
        <Text style={{fontWeight: '700', fontSize: 32, color: '#000'}}>
          Bookmark
        </Text>
        {/* search  */}
        <View style={styles.search}>
          <Image source={require('../../../media/icon_search.png')} />
          <TextInput
            style={{paddingHorizontal: 10, width: 270}}
            placeholder="Search"
            placeholderTextColor={'#A0A3BD'}
          />
          <Image
            style={{paddingHorizontal: 10}}
            source={require('../../../media/search_menu.png')}
          />
        </View>
      </View>

      {/* body  */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.body}>
          {/* list All */}
          <View style={{paddingBottom: 70}}>
            <View style={{flexDirection: 'row'}}>
              <Image source={require('../../../media/all_europe.png')} />
              <View style={{paddingHorizontal: 10, width: 246, height: 96}}>
                <Text>Europe</Text>
                <Text
                  style={{
                    color: '#000',
                    fontSize: 16,
                    fontWeight: '400',
                    paddingTop: 5,
                  }}>
                  Ukraine's President Zelensky to BBC: Blood money being paid...
                </Text>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <Image source={require('../../../media/icon_bbcNews.png')} />
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
                    source={require('../../../media/icon_clock.png')}
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
                  <Text style={{paddingHorizontal: 50, color: '#000'}}>
                    ...
                  </Text>
                </View>
              </View>
            </View>

            <View style={{flexDirection: 'row', paddingTop: 30}}>
              <Image source={require('../../../media/all_travel.png')} />
              <View style={{paddingHorizontal: 10, width: 246, height: 96}}>
                <Text>Travel</Text>
                <Text
                  style={{
                    width: 246,
                    height: 48,
                    color: '#000',
                    fontSize: 16,
                    fontWeight: '400',
                    paddingTop: 5,
                  }}>
                  Her train broke down. Her phone died. And then she met her...
                </Text>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <Image source={require('../../../media/cnn_logo.png')} />
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
                    source={require('../../../media/icon_clock.png')}
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
                  <Text style={{paddingHorizontal: 95, color: '#000'}}>
                    ...
                  </Text>
                </View>
              </View>
            </View>

            <View style={{flexDirection: 'row', paddingTop: 30}}>
              <Image source={require('../../../media/all_Russian.png')} />
              <View style={{paddingHorizontal: 10, width: 246, height: 96}}>
                <Text>Europe</Text>
                <Text
                  style={{
                    width: 246,
                    height: 48,
                    color: '#000',
                    fontSize: 16,
                    fontWeight: '400',
                    paddingTop: 5,
                  }}>
                  Russian warship: Moskva sinks in Black Sea
                </Text>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <Image source={require('../../../media/icon_bbcNews.png')} />
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
                    source={require('../../../media/icon_clock.png')}
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
                  <Text style={{paddingHorizontal: 60, color: '#000'}}>
                    ...
                  </Text>
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row', paddingTop: 30}}>
              <Image source={require('../../../media/all_wind.png')} />
              <View style={{paddingHorizontal: 10, width: 246, height: 96}}>
                <Text>Money</Text>
                <Text
                  style={{
                    width: 246,
                    height: 48,
                    color: '#000',
                    fontSize: 16,
                    fontWeight: '400',
                    paddingTop: 5,
                  }}>
                  Wind power produced more electricity than coal and nucle...
                </Text>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <Image source={require('../../../media/logo_usa.png')} />
                  <Text
                    style={{
                      paddingLeft: 5,
                      color: '#4E4B66',
                      fontSize: 13,
                      fontWeight: '600',
                    }}>
                    USA Today
                  </Text>
                  <Image
                    style={{
                      marginLeft: 15,
                      top: 4,
                    }}
                    source={require('../../../media/icon_clock.png')}
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
                  <Text style={{paddingHorizontal: 60, color: '#000'}}>
                    ...
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{flexDirection: 'row', paddingTop: 30, paddingBottom: 10}}>
              <Image source={require('../../../media/all_Life_We.png')} />
              <View style={{paddingHorizontal: 10, width: 246, height: 96}}>
                <Text>Life</Text>
                <Text
                  style={{
                    width: 246,
                    height: 48,
                    color: '#000',
                    fontSize: 16,
                    fontWeight: '400',
                    paddingTop: 5,
                  }}>
                  'We keep rising to new challenges:' For churches hit by
                </Text>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <Image source={require('../../../media/logo_usa.png')} />
                  <Text
                    style={{
                      paddingLeft: 5,
                      color: '#4E4B66',
                      fontSize: 13,
                      fontWeight: '600',
                    }}>
                    USA Today
                  </Text>
                  <Image
                    style={{
                      marginLeft: 15,
                      top: 4,
                    }}
                    source={require('../../../media/icon_clock.png')}
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
                  <Text style={{paddingHorizontal: 60, color: '#000'}}>
                    ...
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* footer */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => navigation.navigate('MainScreens')}>
          <Image source={require('../../../media/profile_icon_home.png')} />
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => navigation.navigate('ExploreScreens')}>
          <Image source={require('../../../media/icon_explore.png')} />
          <Text style={styles.footerText}>Explore</Text>
        </TouchableOpacity>
        <View style={styles.footerItem}>
          <Image source={require('../../../media/icon_bookmark_click.png')} />
          <Text style={[(styles.footerText, {color: '#1877F2'})]}>
            Bookmark
          </Text>
        </View>
        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => navigation.navigate('ProfileScreens')}>
          <Image source={require('../../../media/icon_profile_click.png')} />
          <Text style={styles.footerText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BookmarkScreens;

const styles = StyleSheet.create({
  // footer
  footer: {
    width: 400,
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
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
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 6,
    width: 344,
    height: 48,
    top: 10,
    paddingLeft: 10,
    borderWidth: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderColor: '#4E4B66',
  },
  header: {
    paddingBottom: 30,
  },
  T: {
    width: '100%',
    height: '100%',
    padding: 24,
  },
});

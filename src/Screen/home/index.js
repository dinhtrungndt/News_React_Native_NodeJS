import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const MainScreens = props => {
  const {navigation} = props;
  return (
    <View style={styles.T}>
      {/* header  */}
      <View style={styles.header}>
        <View style={styles.logo_notifi}>
          <Image
            style={{width: 93, height: 28, marginTop: 5}}
            source={require('../../../media/logo_home.png')}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('NotifiScreens')}>
            <Image
              style={{width: 18, height: 21.5}}
              source={require('../../../media/icon_notification.png')}
            />
          </TouchableOpacity>
        </View>

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
          {/* title Treding - See all  */}
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: '#000',
              }}>
              Trending
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('TrendingScreens')}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  color: '#4E4B66',
                  left: 230,
                }}>
                See all
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('DetailScreens')}>
            <Image
              style={{
                width: 345,
                height: 183,
                borderRadius: 7,
                paddingTop: 0,
                marginTop: 15,
              }}
              source={require('../../../media/new_boby_trending.png')}
            />
          </TouchableOpacity>

          {/* list treding Europe */}
          <View style={{padding: 5}}>
            <Text style={{color: '#4E4B66', top: 5}}>Europe</Text>
            <Text
              style={{
                color: '#000',
                fontSize: 16,
                fontWeight: '400',
                lineHeight: 24,
                top: 5,
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
              <Text style={{paddingHorizontal: 160, color: '#000'}}>...</Text>
            </View>
          </View>

          {/* title Latest - See all  */}
          <View style={{flexDirection: 'row', paddingTop: 15}}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: '#000',
              }}>
              Latest
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  color: '#4E4B66',
                  left: 230,
                }}>
                See all
              </Text>
            </TouchableOpacity>
          </View>

          {/* title All  */}
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{flexDirection: 'row', paddingTop: 10}}>
              <Text
                style={{
                  width: 19,
                  height: 24,
                  fontSize: 16,
                  fontWeight: '400',
                  color: '#000',
                  borderBottomWidth: 1,
                  borderBottomColor: '#1877F2',
                }}>
                All
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '400',
                  color: '#4E4B66',
                  paddingHorizontal: 10,
                }}>
                Sports
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '400',
                  color: '#4E4B66',
                  paddingHorizontal: 5,
                }}>
                Politics
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '400',
                  color: '#4E4B66',
                  paddingHorizontal: 5,
                }}>
                Bussiness
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '400',
                  color: '#4E4B66',
                  paddingHorizontal: 5,
                }}>
                Health
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '400',
                  color: '#4E4B66',
                  paddingHorizontal: 5,
                }}>
                Travel
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '400',
                  color: '#4E4B66',
                  paddingHorizontal: 5,
                }}>
                Science
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '400',
                  color: '#4E4B66',
                  paddingHorizontal: 5,
                }}>
                Fashion
              </Text>
            </View>
          </ScrollView>

          {/* list All */}
          <View style={{paddingBottom: 60}}>
            <View style={{flexDirection: 'row', paddingTop: 30}}>
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
        <TouchableOpacity style={styles.footerItem}>
          <Image source={require('../../../media/icon_home.png')} />
          <Text style={[(styles.footerText, {color: '#1877F2'})]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => navigation.navigate('ExploreScreens')}>
          <Image source={require('../../../media/icon_explore.png')} />
          <Text style={styles.footerText}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => navigation.navigate('BookmarkScreens')}>
          <Image source={require('../../../media/icon_bookmark.png')} />
          <Text style={styles.footerText}>Bookmark</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => navigation.navigate('ProfileScreens')}>
          <Image source={require('../../../media/icon_profile.png')} />
          <Text style={styles.footerText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainScreens;

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
    top: 20,
    paddingLeft: 10,
    borderWidth: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderColor: '#4E4B66',
    marginBottom: 40,
  },
  logo_notifi: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  T: {
    width: '100%',
    height: '100%',
    padding: 24,
  },
});

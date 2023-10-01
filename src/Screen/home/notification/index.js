import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';

const NotifiScreens = props => {
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
              fontSize: 16,
              fontWeight: '600',
              color: '#000',
            }}>
            Notification
          </Text>
          <Image source={require('../../../../media/3cham.png')} />
        </View>
      </View>

      {/* body  */}
      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Today, April 22 */}
          <Text
            style={{
              fontWeight: '600',
              fontSize: 16,
              color: '#000',
              paddingTop: 10,
            }}>
            Today, April 22
          </Text>

          {/* BBC news */}
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              padding: 14,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
              backgroundColor: '#E5E7E9',
            }}>
            <Image source={require('../../../../media/notifi_logo_BBC.png')} />
            <View>
              <Text
                style={{
                  color: '#050505',
                  paddingLeft: 15,
                  width: 260,
                  fontSize: 16,
                }}>
                <Text style={{fontWeight: '600'}}>BBC News</Text> has posted new
                europe news “Ukraine's President Zele...”
              </Text>
              <Text style={{paddingLeft: 15, paddingTop: 5}}>15m ago</Text>
            </View>
          </View>

          {/* Modelyn Saris */}
          <View
            style={{
              flexDirection: 'row',
              marginTop: 15,
              padding: 14,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
              backgroundColor: '#E5E7E9',
            }}>
            <Image
              source={require('../../../../media/notifi_logo_Modelyn.png')}
            />
            <View>
              <Text
                style={{
                  color: '#050505',
                  paddingLeft: 15,
                  width: 150,
                  fontSize: 16,
                }}>
                <Text style={{fontWeight: '600'}}>Modelyn Saris</Text> is now
                following you
              </Text>
              <Text style={{paddingLeft: 15, paddingTop: 5}}>1h ago</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                borderRadius: 6,
                borderColor: '#1877F2',
                borderWidth: 1,
                width: 95,
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 16,
              }}>
              <Text
                style={{
                  color: '#1877F2',
                  fontSize: 20,
                }}>
                +
              </Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  paddingLeft: 10,
                  color: '#1877F2',
                  fontSize: 16,
                }}>
                Follow
              </Text>
            </View>
          </View>

          {/* Omar Merditz */}
          <View
            style={{
              flexDirection: 'row',
              marginTop: 15,
              padding: 14,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
              backgroundColor: '#E5E7E9',
            }}>
            <Image source={require('../../../../media/notifi_logo_Omar.png')} />
            <View>
              <Text
                style={{
                  color: '#050505',
                  paddingLeft: 15,
                  width: 263,
                  fontSize: 16,
                }}>
                <Text style={{fontWeight: '600'}}>Omar Merditz</Text> comment to
                your news “Minting Your First NFT: A... “
              </Text>
              <Text style={{paddingLeft: 15, paddingTop: 5}}>1h ago</Text>
            </View>
          </View>

          {/* Yesterday, April 21 */}
          <Text
            style={{
              fontWeight: '600',
              fontSize: 16,
              color: '#000',
              paddingTop: 15,
            }}>
            Yesterday, April 21
          </Text>

          {/* Marley Botosh */}
          <View
            style={{
              flexDirection: 'row',
              marginTop: 15,
              padding: 14,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
              backgroundColor: '#E5E7E9',
            }}>
            <Image
              source={require('../../../../media/notifi_logo_Marley.png')}
            />
            <View>
              <Text
                style={{
                  color: '#050505',
                  paddingLeft: 15,
                  width: 150,
                  fontSize: 16,
                }}>
                <Text style={{fontWeight: '600'}}>Marley Botosh</Text> is now
                following you
              </Text>
              <Text style={{paddingLeft: 15, paddingTop: 5}}>1 Day ago</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                borderRadius: 6,
                borderColor: '#1877F2',
                borderWidth: 1,
                width: 95,
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 16,
              }}>
              <Text
                style={{
                  color: '#1877F2',
                  fontSize: 20,
                }}>
                +
              </Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  paddingLeft: 10,
                  color: '#1877F2',
                  fontSize: 16,
                }}>
                Follow
              </Text>
            </View>
          </View>

          {/* Modelyn Saris */}
          <View
            style={{
              flexDirection: 'row',
              marginTop: 15,
              padding: 14,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
              backgroundColor: '#E5E7E9',
            }}>
            <Image
              source={require('../../../../media/notifi_logo_Modelyn.png')}
            />
            <View>
              <Text
                style={{
                  color: '#050505',
                  paddingLeft: 15,
                  width: 263,
                  fontSize: 16,
                }}>
                <Text style={{fontWeight: '600'}}>Modelyn Saris</Text> likes
                your news “Minting Your First NFT: A... “
              </Text>
              <Text style={{paddingLeft: 15, paddingTop: 5}}>1 Day ago</Text>
            </View>
          </View>

          {/* CNN */}
          <View
            style={{
              flexDirection: 'row',
              marginTop: 15,
              padding: 14,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
              backgroundColor: '#E5E7E9',
              marginBottom: 100,
            }}>
            <Image source={require('../../../../media/notifi_logo_cnn.png')} />
            <View>
              <Text
                style={{
                  color: '#050505',
                  paddingLeft: 15,
                  width: 263,
                  fontSize: 16,
                }}>
                <Text style={{fontWeight: '600'}}>CNN</Text> has posted new
                travel news “Her train broke down. Her pho...”
              </Text>
              <Text style={{paddingLeft: 15, paddingTop: 5}}>1 Day ago</Text>
            </View>
          </View>
        </ScrollView>
      </View>

      {/* footer */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => navigation.navigate('MainScreens')}>
          <Image source={require('../../../../media/profile_icon_home.png')} />
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => navigation.navigate('ExploreScreens')}>
          <Image source={require('../../../../media/icon_explore.png')} />
          <Text style={styles.footerText}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => navigation.navigate('BookmarkScreens')}>
          <Image source={require('../../../../media/icon_bookmark.png')} />
          <Text style={styles.footerText}>Bookmark</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => navigation.navigate('ProfileScreens')}>
          <Image source={require('../../../../media/icon_profile.png')} />
          <Text style={styles.footerText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NotifiScreens;

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

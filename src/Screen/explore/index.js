import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';

const ExploreScreens = props => {
  const {navigation} = props;
  return (
    <View style={styles.T}>
      {/* header */}
      <View style={styles.header}>
        <Text style={{fontWeight: '700', fontSize: 32, color: '#000'}}>
          Explore
        </Text>
      </View>

      {/* body */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.body}>
          {/* title and see all */}
          <View style={styles.title_seeAll}>
            <Text style={{color: '#000', fontWeight: '700', fontSize: 16}}>
              Topic
            </Text>
            <Text style={{color: '#4E4B66', fontWeight: '400', fontSize: 14}}>
              See all
            </Text>
          </View>

          {/* list topic */}
          <View>
            {/* topic 1 */}
            <View style={{flexDirection: 'row', marginTop: 16}}>
              <Image
                style={{borderRadius: 5}}
                source={require('../../../media/explore_topic_seeall_health.png')}
              />
              <View style={{paddingLeft: 8, width: 180}}>
                <Text style={{fontSize: 16, fontWeight: '400', color: '#000'}}>
                  Health
                </Text>
                <Text>Get energizing workout moves, healthy recipes...</Text>
              </View>
              <TouchableOpacity style={styles.TouOp_Save} activeOpacity={0.5}>
                <Text
                  style={{fontSize: 16, fontWeight: '600', color: '#1877F2'}}>
                  Save
                </Text>
              </TouchableOpacity>
            </View>
            {/* topic 2  */}
            <View style={{flexDirection: 'row', marginTop: 25}}>
              <Image
                style={{borderRadius: 5}}
                source={require('../../../media/explore_topic_seeall_technology.png')}
              />
              <View style={{paddingLeft: 8, width: 180}}>
                <Text style={{fontSize: 16, fontWeight: '400', color: '#000'}}>
                  Technology
                </Text>
                <Text>
                  the application of scientific knowledge to the practi...
                </Text>
              </View>
              <TouchableOpacity
                style={[styles.TouOp_Save, {backgroundColor: '#1877F2'}]}
                activeOpacity={0.5}>
                <Text style={{fontSize: 16, fontWeight: '600', color: '#fff'}}>
                  Saved
                </Text>
              </TouchableOpacity>
            </View>

            {/* topic 3  */}
            <View style={{flexDirection: 'row', marginTop: 25}}>
              <Image
                style={{borderRadius: 5}}
                source={require('../../../media/explore_topic_seeall_art.png')}
              />
              <View style={{paddingLeft: 8, width: 180}}>
                <Text style={{fontSize: 16, fontWeight: '400', color: '#000'}}>
                  Art
                </Text>
                <Text>
                  Art is a diverse range of human activity, and result...
                </Text>
              </View>
              <TouchableOpacity
                style={[styles.TouOp_Save, {backgroundColor: '#1877F2'}]}
                activeOpacity={0.5}>
                <Text style={{fontSize: 16, fontWeight: '600', color: '#fff'}}>
                  Saved
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Popular Topic 1*/}
          <View style={{marginTop: 20}}>
            <Text style={{fontWeight: '700', fontSize: 16, color: '#000'}}>
              Popular Topic
            </Text>

            <Image
              style={{width: 344, height: 190, marginTop: 16, borderRadius: 5}}
              source={require('../../../media/explore_popular_topic.png')}
            />
            <Text style={{paddingTop: 5}}>Europe</Text>
            <Text style={[styles.font_16_400_black, {paddingTop: 3}]}>
              Russian warship: Moskva sinks in Black Sea
            </Text>
            <View style={{flexDirection: 'row', paddingTop: 3}}>
              <Image source={require('../../../media/icon_bbcNews.png')} />
              <Text
                style={{paddingLeft: 5, color: '#4E4B66', fontWeight: '600'}}>
                BBC News
              </Text>
              <Image
                style={{marginLeft: 15, marginTop: 3}}
                source={require('../../../media/icon_clock.png')}
              />
              <Text style={{marginLeft: 2}}>4h ago</Text>
            </View>
          </View>

          {/* Popular Topic 2*/}
          <View style={{marginTop: 20, marginBottom: 80}}>
            <Text style={{fontWeight: '700', fontSize: 16, color: '#000'}}>
              Popular Topic
            </Text>

            <Image
              style={{width: 344, height: 190, marginTop: 16, borderRadius: 5}}
              source={require('../../../media/explore_popular_topic_ukraine.png')}
            />
            <Text style={{paddingTop: 5}}>Europe</Text>
            <Text style={[styles.font_16_400_black, {paddingTop: 3}]}>
              Ukraine's President Zelensky to BBC: Blood money being paid for
              Russian oil
            </Text>
            <View style={{flexDirection: 'row', paddingTop: 3}}>
              <Image source={require('../../../media/icon_bbcNews.png')} />
              <Text
                style={{paddingLeft: 5, color: '#4E4B66', fontWeight: '600'}}>
                BBC News
              </Text>
              <Image
                style={{marginLeft: 15, marginTop: 3}}
                source={require('../../../media/icon_clock.png')}
              />
              <Text style={{marginLeft: 2}}>14m ago</Text>
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
          <Image source={require('../../../media/icon_explore_click.png')} />
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

export default ExploreScreens;

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

  // body
  font_16_400_black: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000',
  },
  TouOp_Save: {
    width: 78,
    height: 34,
    left: 16,
    top: 26,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: '#1877F2',
  },
  title_seeAll: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  // header
  header: {
    paddingBottom: 16,
  },
  T: {
    width: '100%',
    height: '100%',
    padding: 24,
  },
});

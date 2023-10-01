import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';

const DetailScreens = props => {
  const {navigation} = props;
  return (
    <View style={styles.T}>
      {/* header  */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('MainScreens')}>
          <Image source={require('../../../../../media/back.png')} />
        </TouchableOpacity>
        <Image
          style={{marginLeft: 260}}
          source={require('../../../../../media/icon_share.png')}
        />
        <Image
          style={{right: 5}}
          source={require('../../../../../media/3cham.png')}
        />
      </View>

      {/* body */}
      <View style={styles.body}>
        {/* logo_bbc  */}
        <View style={styles.logo_bbc}>
          <Image
            style={{width: 50, height: 50}}
            source={require('../../../../../media/notifi_logo_BBC.png')}
          />
          <View style={{paddingLeft: 5, paddingTop: 5}}>
            <Text
              style={{
                width: 82,
                height: 24,
                fontSize: 16,
                fontWeight: '600',
                color: '#000',
              }}>
              BBC News
            </Text>
            <Text>14m ago</Text>
          </View>
          <Text style={styles.bbc_Following}>Following</Text>
        </View>

        {/* Img and title */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{paddingTop: 10}}>
            <Image
              style={{width: 345, height: 230, borderRadius: 5}}
              source={require('../../../../../media/detail_bbc.png')}
            />
            <Text style={{paddingTop: 10}}>Europe</Text>

            {/* title */}
            <View>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: '400',
                  color: '#000',
                  lineHeight: 36,
                }}>
                Ukraine's President Zelensky to BBC: Blood money being paid for
                Russian oil
              </Text>
              <Text
                style={{
                  paddingTop: 10,
                  color: '#4E4B66',
                  fontSize: 16,
                  fontWeight: '400',
                  width: 335,
                }}>
                Ukrainian President Volodymyr Zelensky has accused European
                countries that continue to buy Russian oil of "earning their
                money in other people's blood".
              </Text>
              <Text
                style={{
                  paddingTop: 20,
                  color: '#4E4B66',
                  fontSize: 16,
                  fontWeight: '400',
                  width: 335,
                }}>
                In an interview with the BBC, President Zelensky singled out
                Germany and Hungary, accusing them of blocking efforts to
                embargo energy sales, from which Russia stands to make up to
                £250bn ($326bn) this year.
              </Text>
              <Text
                style={{
                  paddingTop: 20,
                  paddingBottom: 180,
                  color: '#4E4B66',
                  fontSize: 16,
                  fontWeight: '400',
                  width: 335,
                }}>
                There has been a growing frustration among Ukraine's leadership
                with Berlin, which has backed some sanctions against Russia but
                so far resisted calls to back tougher action on oil sales.
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>

      {/* footer */}
      <View style={styles.footer}>
        <View style={styles.icon_tym_footer}>
          <Image source={require('../../../../../media/icon_tym.png')} />
          <Text style={{paddingLeft: 10, color: '#000', fontWeight: '400'}}>
            24.5K
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('CommentScreens')}>
          <View style={styles.icon_comment_footer}>
            <Image source={require('../../../../../media/icon_comment.png')} />
            <Text style={{paddingLeft: 10, color: '#000', fontWeight: '400'}}>
              1K
            </Text>
          </View>
        </TouchableOpacity>
        <Image
          style={{marginLeft: 170}}
          source={require('../../../../../media/icon_bookmark_footer.png')}
        />
      </View>
    </View>
  );
};

export default DetailScreens;

const styles = StyleSheet.create({
  // footer
  icon_comment_footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
  },
  icon_tym_footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    width: 400,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingBottom: 16,
    paddingVertical: 10,
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
  bbc_Following: {
    width: 89,
    height: 34,
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginLeft: 120,
    marginTop: 10,
    backgroundColor: '#1877F2',
    borderRadius: 5,
    textAlign: 'center',
    paddingTop: 5,
  },
  logo_bbc: {
    flexDirection: 'row',
    paddingBottom: 15,
  },
  // header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
  },
  T: {
    width: '100%',
    height: '100%',
    padding: 24,
  },
});

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Input} from 'react-native-elements';

const CommentScreens = props => {
  const {navigation} = props;
  return (
    <View style={styles.T}>
      {/* header  */}
      <View style={styles.header}>
        {/* back and title */}
        <View style={styles.back_title}>
          <TouchableOpacity
            onPress={() => navigation.navigate('DetailScreens')}>
            <Image source={require('../../../../../../media/back.png')} />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 400,
              color: '#000',
              paddingLeft: 115,
            }}>
            Comments
          </Text>
        </View>
      </View>

      {/* body */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.body}>
          {/* account and title */}
          <View style={{flexDirection: 'row'}}>
            <Image source={require('../../../../../../media/acc_wilson.png')} />
            <View style={styles.acc_title}>
              <Text style={{fontSize: 16, fontWeight: '600', color: '#000'}}>
                Wilson Franci
              </Text>
              <Text style={{fontSize: 16, fontWeight: '400', color: '#000'}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Text>
              <View
                style={{flexDirection: 'row', paddingTop: 5, color: '#4E4B66'}}>
                <Text>4w</Text>
                <Image
                  style={{marginLeft: 15, marginTop: 5}}
                  source={require('../../../../../../media/comment_icon_tymmo.png')}
                />
                <Text style={{marginLeft: 3}}>125 likes</Text>
                <Image
                  style={{marginLeft: 15, marginTop: 5}}
                  source={require('../../../../../../media/comment_icon_reply.png')}
                />
                <Text style={{marginLeft: 3}}>reply</Text>
              </View>
            </View>
          </View>

          {/* account and title reply */}
          <View
            style={{
              flexDirection: 'row',
              width: 230,
              marginTop: 20,
              marginLeft: 50,
            }}>
            <Image
              source={require('../../../../../../media/acc_Madelyn.png')}
            />
            <View style={styles.acc_title}>
              <Text style={{fontSize: 16, fontWeight: '600', color: '#000'}}>
                Madelyn Saris
              </Text>
              <Text style={{fontSize: 16, fontWeight: '400', color: '#000'}}>
                Lorem Ipsum is simply dummy text of the printing and type...
              </Text>
              <View
                style={{flexDirection: 'row', paddingTop: 5, color: '#4E4B66'}}>
                <Text>4w</Text>
                <Image
                  style={{marginLeft: 15, marginTop: 5}}
                  source={require('../../../../../../media/comment_icon_tymdo.png')}
                />
                <Text style={{marginLeft: 3}}>3 likes</Text>
                <Image
                  style={{marginLeft: 15, marginTop: 5}}
                  source={require('../../../../../../media/comment_icon_reply.png')}
                />
                <Text style={{marginLeft: 3}}>reply</Text>
              </View>
            </View>
          </View>
          <Text
            style={{
              paddingLeft: 50,
              paddingTop: 10,
              fontSize: 16,
              fontWeight: '400',
              color: '#4E4B66',
            }}>
            See more (2)
          </Text>

          {/* account and title */}
          <View style={{flexDirection: 'row', paddingTop: 25}}>
            <Image source={require('../../../../../../media/acc_marley.png')} />
            <View style={styles.acc_title}>
              <Text style={{fontSize: 16, fontWeight: '600', color: '#000'}}>
                Marley Botosh
              </Text>
              <Text style={{fontSize: 16, fontWeight: '400', color: '#000'}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Text>
              <View
                style={{flexDirection: 'row', paddingTop: 5, color: '#4E4B66'}}>
                <Text>4w</Text>
                <Image
                  style={{marginLeft: 15, marginTop: 5}}
                  source={require('../../../../../../media/comment_icon_tymmo.png')}
                />
                <Text style={{marginLeft: 3}}>12 likes</Text>
                <Image
                  style={{marginLeft: 15, marginTop: 5}}
                  source={require('../../../../../../media/comment_icon_reply.png')}
                />
                <Text style={{marginLeft: 3}}>reply</Text>
              </View>
            </View>
          </View>
          <Text
            style={{
              paddingLeft: 50,
              paddingTop: 10,
              fontSize: 16,
              fontWeight: '400',
              color: '#4E4B66',
            }}>
            See more (2)
          </Text>

          {/* account and title */}
          <View style={{flexDirection: 'row', paddingTop: 25}}>
            <Image
              source={require('../../../../../../media/acc_Alfonso.png')}
            />
            <View style={styles.acc_title}>
              <Text style={{fontSize: 16, fontWeight: '600', color: '#000'}}>
                Alfonso Septimus
              </Text>
              <Text style={{fontSize: 16, fontWeight: '400', color: '#000'}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Text>
              <View
                style={{flexDirection: 'row', paddingTop: 5, color: '#4E4B66'}}>
                <Text>4w</Text>
                <Image
                  style={{marginLeft: 15, marginTop: 5}}
                  source={require('../../../../../../media/comment_icon_tymdo.png')}
                />
                <Text style={{marginLeft: 3}}>14K likes</Text>
                <Image
                  style={{marginLeft: 15, marginTop: 5}}
                  source={require('../../../../../../media/comment_icon_reply.png')}
                />
                <Text style={{marginLeft: 3}}>reply</Text>
              </View>
            </View>
          </View>
          <Text
            style={{
              paddingLeft: 50,
              paddingTop: 10,
              fontSize: 16,
              fontWeight: '400',
              color: '#4E4B66',
            }}>
            See more (58)
          </Text>

          {/* account and title */}
          <View style={{flexDirection: 'row', paddingTop: 25}}>
            <Image source={require('../../../../../../media/acc_Omar.png')} />
            <View style={styles.acc_title}>
              <Text style={{fontSize: 16, fontWeight: '600', color: '#000'}}>
                Omar Herwitz
              </Text>
              <Text style={{fontSize: 16, fontWeight: '400', color: '#000'}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Text>
              <View
                style={{flexDirection: 'row', paddingTop: 5, color: '#4E4B66'}}>
                <Text>4w</Text>
                <Image
                  style={{marginLeft: 15, marginTop: 5}}
                  source={require('../../../../../../media/comment_icon_tymmo.png')}
                />
                <Text style={{marginLeft: 3}}>16 likes</Text>
                <Image
                  style={{marginLeft: 15, marginTop: 5}}
                  source={require('../../../../../../media/comment_icon_reply.png')}
                />
                <Text style={{marginLeft: 3}}>reply</Text>
              </View>
            </View>
          </View>

          {/* account and title */}
          <View
            style={{flexDirection: 'row', paddingTop: 25, paddingBottom: 100}}>
            <Image source={require('../../../../../../media/acc_Corey.png')} />
            <View style={styles.acc_title}>
              <Text style={{fontSize: 16, fontWeight: '600', color: '#000'}}>
                Corey Geidt
              </Text>
              <Text style={{fontSize: 16, fontWeight: '400', color: '#000'}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Text>
              <View
                style={{flexDirection: 'row', paddingTop: 5, color: '#4E4B66'}}>
                <Text>4w</Text>
                <Image
                  style={{marginLeft: 15, marginTop: 5}}
                  source={require('../../../../../../media/comment_icon_tymmo.png')}
                />
                <Text style={{marginLeft: 3}}>25 likes</Text>
                <Image
                  style={{marginLeft: 15, marginTop: 5}}
                  source={require('../../../../../../media/comment_icon_reply.png')}
                />
                <Text style={{marginLeft: 3}}>reply</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* footer */}
      <View style={styles.footer}>
        <Input
          style={styles.input_footer}
          placeholder="Type your comment"
          placeholderTextSize={1}
        />
        <TouchableOpacity style={styles.icon_send}>
          <Image
            style={{marginLeft: 10, marginTop: 13}}
            source={require('../../../../../../media/comment_icon_send.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CommentScreens;

const styles = StyleSheet.create({
  // footer
  input_footer: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#4E4B66',
    borderRadius: 6,
    marginTop: 20,
    paddingLeft: 10,
    fontSize: 16,
  },
  icon_send: {
    width: 50,
    height: 50,
    marginRight: 10,
    backgroundColor: '#1877F2',
    borderRadius: 6,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'space-between',
    marginLeft: 5,
    width: 315,
    height: 80,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
  },
  // body
  acc_title: {
    paddingLeft: 10,
  },
  body: {
    width: 300,
    paddingTop: 20,
  },
  // header
  back_title: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  header: {
    paddingBottom: 10,
  },

  T: {
    width: '100%',
    height: '100%',
    padding: 24,
  },
});

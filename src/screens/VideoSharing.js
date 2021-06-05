import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

import styles from '../styleSheet/Style';
import Header from '../components/Header';
import Button from '../components/Button';
import {Color} from '../utils/Color';
const VideoSharing = props => {
  let {navigation} = props;

  function renderSocialIcon(img, ftn) {
    return (
      <TouchableOpacity onPress={ftn}>
        <Image style={styles.socialIcon} source={img} />
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.galleryContainer}>
      <Header
        navigation={navigation}
        arrowBack={'addstyle'}
        title="Video Sharing"
        nextbtn="form"
      />
      <ScrollView style={{margin: 20}}>
        <Image
          source={require('../assets/gallery/edit.png')}
          style={styles.videoImage}
        />
        <Text style={styles.centerText}>Share on Social media</Text>
        <View style={styles.lineRow}>
          {renderSocialIcon(require('../assets/social/in.png'), () =>
            console.log('hello'),
          )}
          {renderSocialIcon(require('../assets/social/li.png'), () =>
            console.log('hello'),
          )}
          {renderSocialIcon(require('../assets/social/14.png'), () =>
            console.log('hello'),
          )}
          {renderSocialIcon(require('../assets/social/tw.png'), () =>
            console.log('hello'),
          )}
        </View>
        <Text style={styles.centerText}>or {'\n'} send trhough email</Text>
        <Button
          name="Email"
          style={{backgroundColor: Color.emailbtn}}
          func={() => navigation.navigate('form')}
        />
      </ScrollView>
    </View>
  );
};

export default VideoSharing;

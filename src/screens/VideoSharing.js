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
import Video from '../components/Video';
import {Color} from '../utils/Color';
const VideoSharing = props => {
  let {navigation, route} = props;
  const video = route.params.videoData;

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
        nextbtn={() => navigation.navigate('form', {videoData: video})}
        // nextbtn="form"
      />
      <ScrollView style={{margin: 20}}>
        {video && (
          <Video
            videoUri={video} // Can be a URL or a local file.
          />
        )}
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

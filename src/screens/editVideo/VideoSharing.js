import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import Share from 'react-native-share';
import styles from '../../styleSheet/Style';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Video from '../../components/Video';
import {Color} from '../../utils/Color';
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

  function ShareSocial(socialApp) {
    const shareOptions = {
      title: 'Edited Video',
      message: 'My videos',
      subject: 'Sharing my intro video which I recorded in Celebfie.',
      url: video,
      type: 'video/mp4',
      social: socialApp === 'fa' ? Share.Social.FACEBOOK: socialApp === 'li' ? Share.Social.LINKEDIN: socialApp === 'in' ? Share.Social.INSTAGRAM: Share.Social.TWITTER ,
    };
    Share.shareSingle(shareOptions)
      .then(res => console.log('respossss', res))
      .catch(err => {
        console.log('errerrerrerr', err);
      });
  }

  return (
    <View style={styles.galleryContainer}>
      <Header
        navigation={navigation}
        arrowBack={'editvideo'}
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
          {renderSocialIcon(require('../../assets/social/in.png'), () =>
            ShareSocial('in'),
          )}
          {renderSocialIcon(require('../../assets/social/li.png'), () =>
            ShareSocial('li'),
          )}
          {renderSocialIcon(require('../../assets/social/14.png'), () =>
            ShareSocial('fa'),
          )}
          {renderSocialIcon(require('../../assets/social/tw.png'), () =>
            ShareSocial('tw'),
          )}
        </View>
        <Text style={styles.centerText}>or {'\n'} send trhough email</Text>
        <Button
          name="Email"
          style={{backgroundColor: Color.emailbtn}}
          func={() => navigation.navigate('form', {videoData: video})}
        />
      </ScrollView>
    </View>
  );
};

export default VideoSharing;

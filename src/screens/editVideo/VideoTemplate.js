import React, {useState, useRef} from 'react';
import {View, Image, TouchableOpacity, Text, ScrollView} from 'react-native';
// import Video from 'react-native-video';

import styles from '../../styleSheet/Style';
import Header from '../../components/Header';
import Video from '../../components/Video';

let templates = [
  {
    img: require('../../assets/templates/Kids-Party-Snapchat-Geofilters-Template.png'),
  },
  {
    img: require('../../assets/templates/Bridal-Shower-Snapchat-Geofilters-Template.png'),
  },
  {
    img: require('../../assets/templates/Birthday-Snapchat-Geofilters-Template.png'),
  },
  {
    img: require('../../assets/templates/Bachelorette-Snapchat-Geofilters-Template.png'),
  },
  {
    img: require('../../assets/templates/Kids-Party-Snapchat-Geofilters-Template.png'),
  },
  {
    img: require('../../assets/templates/Bridal-Shower-Snapchat-Geofilters-Template.png'),
  },
  {
    img: require('../../assets/templates/Birthday-Snapchat-Geofilters-Template.png'),
  },
  {
    img: require('../../assets/templates/Bachelorette-Snapchat-Geofilters-Template.png'),
  },
];
const VideoTemplate = props => {
  let {navigation, route} = props;
  const video = route.params.videoData;
  const VideoPlayer = useRef(null);

  const OnProgress = async res => {
    // await setSeconds(res.currentTime * 1000);
    // setProgress(res.currentTime / duration);
    // console.log('progress', res);
    // if(seconds < video.duration){
    // await  createThumbnail({
    //     url: video.path,
    //     timeStamp: seconds,
    //   })
    //     .then(response => {
    //       setVideoImg(response.path);
    //       console.log('reeeeeee', response.path);
    //     })
    //     .catch(err => console.log( err ));
    // }
  };

  return (
    <View style={styles.galleryContainer}>
      <Header
        navigation={navigation}
        arrowBack={'editvideo'}
        title="Video Template"
        nextbtn={() => navigation.navigate('addtext', {videoData: video})}
      />
      <ScrollView>
        {video && (
            <Video
            videoUri={video} // Can be a URL or a local file.
          />
        )}
        <ScrollView horizontal={true} style={styles.scroll}>
          {templates.map((item, index) => {
            return <Image source={item.img} style={styles.templatesImage} />;
          })}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default VideoTemplate;

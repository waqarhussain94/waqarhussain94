import React, {useState} from 'react';
import {View, Image, TouchableOpacity, Text, ScrollView} from 'react-native';

import styles from '../styleSheet/Style';
import Header from '../components/Header';

let templates = [
  {
    img: require('../assets/templates/Kids-Party-Snapchat-Geofilters-Template.png'),
  },
  {
    img: require('../assets/templates/Bridal-Shower-Snapchat-Geofilters-Template.png'),
  },
  {img: require('../assets/templates/Birthday-Snapchat-Geofilters-Template.png')},
  {
    img: require('../assets/templates/Bachelorette-Snapchat-Geofilters-Template.png'),
  },
  {
    img: require('../assets/templates/Kids-Party-Snapchat-Geofilters-Template.png'),
  },
  {
    img: require('../assets/templates/Bridal-Shower-Snapchat-Geofilters-Template.png'),
  },
  {img: require('../assets/templates/Birthday-Snapchat-Geofilters-Template.png')},
  {
    img: require('../assets/templates/Bachelorette-Snapchat-Geofilters-Template.png'),
  },
];
const VideoTemplate = props => {
  let {navigation} = props;

  return (
    <View style={styles.galleryContainer}>
      <Header
        navigation={navigation}
        arrowBack={'editvideo'}
        title="Video Template"
        nextbtn="addtext"
      />
      <ScrollView>
        <Image
          source={require('../assets/gallery/edit.png')}
          style={[styles.videoImage, styles.bottomMargin]}
        />
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

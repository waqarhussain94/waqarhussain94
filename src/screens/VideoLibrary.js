import React, {useState} from 'react';
import {View, Image} from 'react-native';

import styles from '../styleSheet/Style';
import Header from '../components/Header';

let Images = [
  {img: require('../assets/gallery/Artistphoto.png')},
  {img: require('../assets/gallery/Artistphoto2.png')},
  {img: require('../assets/gallery/Artistphoto3.png')},
  {img: require('../assets/gallery/Artistphoto.png')},
  {img: require('../assets/gallery/Artistphoto2.png')},
  {img: require('../assets/gallery/Artistphoto3.png')},
  {img: require('../assets/gallery/Artistphoto.png')},
  {img: require('../assets/gallery/Artistphoto2.png')},
  {img: require('../assets/gallery/Artistphoto3.png')},
  {img: require('../assets/gallery/Artistphoto.png')},
  {img: require('../assets/gallery/Artistphoto2.png')},
  {img: require('../assets/gallery/Artistphoto3.png')},
  {img: require('../assets/gallery/Artistphoto.png')},
  {img: require('../assets/gallery/Artistphoto2.png')},
  {img: require('../assets/gallery/Artistphoto3.png')},
  {img: require('../assets/gallery/Artistphoto.png')},
  {img: require('../assets/gallery/Artistphoto2.png')},
];
const VideoLibrary = props => {
  let {navigation} = props;

  return (
    <View style={styles.galleryContainer}>
      <Header
        navigation={navigation}
        arrowBack={'home'}
        title="Video library"
        nextbtn="editvideo"
      />
      <View style={styles.gallerImages}>
        {Images.map((item, index) => {
          return <Image source={item.img} style={styles.Imagegallery} />;
        })}
      </View>
    </View>
  );
};

export default VideoLibrary;

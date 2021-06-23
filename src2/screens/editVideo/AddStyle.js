import React, {useState, useRef} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';

import styles from '../../styleSheet/Style';
import Header from '../../components/Header';
import Video from '../../components/Video';

const AddStyle = props => {
  let {navigation, route} = props;
  const video = route.params.videoData;

  function renderIcon(title, img, ftn) {
    return (
      <TouchableOpacity onPress={ftn}>
        <View style={[styles.iconBox]}>
          <Image style={styles.iconImage} source={img} />
        </View>
        <Text style={styles.centerText}>{title}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.galleryContainer}>
      <Header
        navigation={navigation}
        arrowBack={'addtext'}
        title="Add Style"
        nextbtn={() => navigation.navigate('videosharing', {videoData: video})}
      />
      <ScrollView style={{margin: 20}}>
        {video && (
          <Video
            videoUri={video} // Can be a URL or a local file.
          />
        )}
        <Text style={styles.centerText}>Edit Style</Text>
        <View style={styles.lineRow}>
          {renderIcon(
            'Color Filter',
            require('../../assets/icons/contrast.png'),
            () => console.log('hello'),
          )}
          {renderIcon(
            'Contrast',
            require('../../assets/icons/brightness.png'),
            () => console.log('hello'),
          )}
          {renderIcon('Brightness', require('../../assets/icons/rgb.png'), () =>
            console.log('hello'),
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default AddStyle;

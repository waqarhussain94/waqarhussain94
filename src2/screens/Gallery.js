import React, {useState} from 'react';
import {View} from 'react-native';

import styles from '../styleSheet/Style';
import Header from '../components/Header';

const Gallery = props => {
  let {navigation} = props;

  return (
    <View style={styles.galleryContainer}>
      <Header
        navigation={navigation}
        arrowBack={'videolibrary'}
        title="Gallery"
        nextbtn="setting"
      />
    </View>
  );
};

export default Gallery;

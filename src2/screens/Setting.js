import React, {useState} from 'react';
import {View} from 'react-native';

import styles from '../styleSheet/Style';
import Header from '../components/Header';

const Setting = props => {
  let {navigation} = props;

  return (
    <View style={styles.galleryContainer}>
      <Header
        navigation={navigation}
        arrowBack={'brightness'}
        title="Setting"
        nextbtn="setting"
        nextdisable={true}
      />
    </View>
  );
};

export default Setting;

import React, {useState} from 'react';
import {View} from 'react-native';

import styles from '../styleSheet/Style';
import Header from '../components/Header';

const Notification = props => {
  let {navigation} = props;

  return (
    <View style={styles.galleryContainer}>
      <Header
        navigation={navigation}
        arrowBack={'videolibrary'}
        title="Notification"
        nextbtn="setting"
      />
    </View>
  );
};

export default Notification;

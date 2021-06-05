import React, {useState} from 'react';
import {View, Image, TouchableOpacity, Text, ScrollView} from 'react-native';

import styles from '../styleSheet/Style';
import Header from '../components/Header';

const EditVideo = props => {
  let {navigation} = props;

  function renderIcon(img, ftn) {
    return (
      <TouchableOpacity onPress={ftn}>
        <View style={[styles.iconBox]}>
          <Image style={styles.iconImage} source={img} />
        </View>
      </TouchableOpacity>
    );
  }

  function renderplusIcon(img, ftn) {
    return (
      <TouchableOpacity onPress={ftn}>
        <View style={[styles.iconBox]}>
          <Image style={styles.plusIcon} source={img} />
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.galleryContainer}>
      <Header
        navigation={navigation}
        arrowBack={'videolibrary'}
        title="Edit Video"
        nextbtn="videotemplate"
      />
      <ScrollView>
        <Image
          source={require('../assets/gallery/edit.png')}
          style={styles.videoImage}
        />
        <View style={styles.lineRow}>
          {renderIcon(require('../assets/icons/T.png'), () =>
            console.log('hello'),
          )}
          {renderIcon(require('../assets/icons/copy.png'), () =>
            console.log('hello'),
          )}
          {renderIcon(require('../assets/icons/expand.png'), () =>
            console.log('hello'),
          )}
          {renderIcon(require('../assets/icons/duration.png'), () =>
            console.log('hello'),
          )}
          {/*  <Icon name={'home'} style={[styles.IconImage,{backgroundColor: '#1AD5AC', padding: 10, borderRadius: 25}]} /> */}
        </View>
        <View style={styles.lineRow}>
          <Image
            source={require('../assets/gallery/edit.png')}
            style={styles.smallImg}
          />
          {renderplusIcon(require('../assets/icons/+.png'), () =>
            console.log('hello'),
          )}
          <Image
            source={require('../assets/gallery/edit.png')}
            style={styles.mediumImg}
          />
          {renderplusIcon(require('../assets/icons/+.png'), () =>
            console.log('hello'),
          )}
          <Image
            source={require('../assets/gallery/edit.png')}
            style={styles.smallImg}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default EditVideo;

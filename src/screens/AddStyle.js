import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';

import styles from '../styleSheet/Style';
import Header from '../components/Header';

const AddStyle = props => {
  let {navigation} = props;

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
        nextbtn="videosharing"
      />
      <ScrollView style={{margin: 20}}>
        <Image
          source={require('../assets/gallery/edit.png')}
          style={styles.videoImage}
        />
        <Text style={styles.centerText}>Edit Style</Text>
        <View style={styles.lineRow}>
          {renderIcon(
            'Color Filter',
            require('../assets/icons/contrast.png'),
            () => console.log('hello'),
          )}
          {renderIcon(
            'Contrast',
            require('../assets/icons/brightness.png'),
            () => console.log('hello'),
          )}
          {renderIcon('Brightness', require('../assets/icons/rgb.png'), () =>
            console.log('hello'),
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default AddStyle;

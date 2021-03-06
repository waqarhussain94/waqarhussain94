import React from 'react';
import {Text, TouchableOpacity, View, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from '../styleSheet/Style';

export default function Header(props) {
  let {arrowBack, title, nextbtn, navigation, nextdisable} = props;

  return (
    <ImageBackground
      source={require('../assets/backgrounds/headerbg.png')}
      style={styles.headerBg}>
      <View style={[styles.header,{marginTop: title === 'Form' ? 20: null}]}>
        <Icon name={'arrowleft'} style={styles.IconHeader} onPress={()=> navigation.navigate(arrowBack)} />
        <Text style={styles.HeaderText}>{title}</Text>
        <TouchableOpacity style={title === 'Form' ? null: styles.btnHeader} onPress={nextbtn}>
          <Text style={title === 'Form' ? {color: 'transparent'} : styles.btnTextHeader}>{'Next'}</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

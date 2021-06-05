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
      <View style={styles.header}>
        <Icon name={'arrowleft'} style={styles.IconHeader} onPress={()=> navigation.navigate(arrowBack)} />
        <Text style={styles.HeaderText}>{title}</Text>
        <TouchableOpacity style={styles.btnHeader} onPress={()=> navigation.navigate(nextbtn)}>
          <Text style={styles.btnTextHeader}>{'Next'}</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

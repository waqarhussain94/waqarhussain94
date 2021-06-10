import React, {useState} from 'react';
import {Text, ImageBackground, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from '../styleSheet/Style';

const Home = props => {
  let {navigation} = props;

  function renderMenuItem(value, icon, func) {
    return (
      <TouchableOpacity style={styles.MenuContainer} onPress={func}>
        {/* <Image source={icon} /> */}
        <Icon name={icon} style={styles.IconImage} />
        <Text style={styles.Menutext}>{value}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <ImageBackground
      source={require('../assets/backgrounds/linearBg.png')}
      style={styles.itemContainer}>
      {/* {renderMenuItem('Messages', require('../assets/icons/msg.png'), () => navigation.navigate('home'))} */}
      {renderMenuItem('Messages', 'message1', () =>
        navigation.navigate('home'),
      )}
      {renderMenuItem('Gallery', 'switcher', () =>
        navigation.navigate('videolibrary'),
      )}
      {renderMenuItem('setting', 'setting', () => navigation.navigate('home'))}
      {renderMenuItem('notifications', 'notification', () =>
        navigation.navigate('home'),
      )}
    </ImageBackground>
  );
};

export default Home;

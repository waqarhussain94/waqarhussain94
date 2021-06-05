import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

import styles from '../styleSheet/Style';
import Header from '../components/Header';
import Button from '../components/Button';

const Form = props => {
  let {navigation} = props;

  return (
    <View style={styles.galleryContainer}>
      <Header
        navigation={navigation}
        arrowBack={'videosharing'}
        title="Form"
        nextbtn="login"
      />
      <ScrollView style={{margin: 20}}>
        <Image
          source={require('../assets/gallery/edit.png')}
          style={styles.videoImage}
        />
        <TextInput placeholder="Subject" style={styles.inputform} />
        <TextInput
          multiline={true}
          numberOfLines={3}
          placeholder="Your message here..."
          style={styles.inputform}
        />
        <View style={styles.clientContainer}>
          <Image
            source={require('../assets/icons/delete.png')}
            style={[styles.iconImage, {margin: 5, alignSelf: 'flex-end'}]}
          />
          <TextInput placeholder="Customer" style={styles.inputform} />
          <TextInput placeholder="Email" style={styles.inputform} />
        </View>
        <View style={styles.clientAddbtn}>
          <Image
            source={require('../assets/icons/add-user.png')}
            style={[styles.iconImage, {margin: 5}]}
          />
          <Text>Add Client</Text>
        </View>
        <Button name="SEND" func={() => navigation.navigate('home')} />
      </ScrollView>
    </View>
  );
};

export default Form;

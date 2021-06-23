import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

import styles from '../../styleSheet/Style';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Video from '../../components/Video';

const Form = props => {
  let {navigation, route} = props;
  const video = route.params.videoData;

  return (
    <View style={styles.galleryContainer}>
      <Header
        navigation={navigation}
        arrowBack={'videosharing'}
        title="Form"
        nextbtn="login"
      />
      <ScrollView style={{margin: 20}}>
        {video && (
          <Video
            videoUri={video} // Can be a URL or a local file.
          />
        )}
        <TextInput placeholder="Subject" style={styles.inputform} />
        <TextInput
          multiline={true}
          numberOfLines={3}
          placeholder="Your message here..."
          style={styles.inputform}
        />
        <View style={styles.clientContainer}>
          <Image
            source={require('../../assets/icons/delete.png')}
            style={[styles.iconImage, {margin: 5, alignSelf: 'flex-end'}]}
          />
          <TextInput placeholder="Customer" style={styles.inputform} />
          <TextInput placeholder="Email" style={styles.inputform} />
        </View>
        <View style={styles.clientAddbtn}>
          <Image
            source={require('../../assets/icons/add-user.png')}
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

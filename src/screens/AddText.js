import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import styles from '../styleSheet/Style';
import Header from '../components/Header';

const colors = [
  {colorName: '#50A1FF'},
  {colorName: '#F8E71C'},
  {colorName: '#986EFF'},
  {colorName: '#1AD5AC'},
  {colorName: '#F54E5E'},
  {colorName: '#9DE686'},
  {colorName: '#165595'},
  {colorName: '#5DBDCD'},
];
const AddText = props => {
  let {navigation} = props;
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [selectedColor, setColor] = useState('#1AD5AC');

  function renderColor(name, ftn) {
    return (
      <TouchableOpacity
        onPress={ftn}
        style={[
          styles.colorMain,
          {
            borderColor: selectedColor === name ? selectedColor : 'transparent',
          },
        ]}>
        <View style={[styles.CircleColor, {backgroundColor: name}]} />
      </TouchableOpacity>
    );
  }

  function renderbtn(name, ftn) {
    return (
      <TouchableOpacity
        style={[
          styles.btn,
          {
            width: '40%',
            backgroundColor: name == 'Reset' ? 'white' : '#1AD5AC',
          },
        ]}>
        <Text
          style={[
            styles.btnText,
            {color: name == 'Reset' ? 'black' : 'white'},
          ]}>
          {name}
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.galleryContainer}>
      <Header
        navigation={navigation}
        arrowBack={'editvideo'}
        title="Add Text"
        nextbtn="addstyle"
      />
      <ScrollView style={{margin: 20}}>
        <View>
          <Image
            source={require('../assets/gallery/edit.png')}
            style={styles.videoImage}
          />
          <TextInput
            style={[
              styles.inputText,
              {borderColor: selectedColor, color: selectedColor},
            ]}
            placeholderTextColor={selectedColor}
            placeholder="ADD YOUR TEXT HERE"
          />
        </View>
        <Text style={styles.fontText}>Font Style</Text>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }>
          <Picker.Item label="RUBIK" value="java" />
          <Picker.Item label="ROBOTO" value="js" />
        </Picker>
        <Text style={styles.fontText}>Color</Text>
        <View style={styles.lineRow}>
          {colors.map(item => {
            return renderColor(item.colorName, () => setColor(item.colorName));
          })}
        </View>

        <View style={styles.lineRow}>
          {renderbtn('Reset', () => console.log('rest'))}
          {renderbtn('Done', () => console.log('Done'))}
        </View>
      </ScrollView>
    </View>
  );
};

export default AddText;

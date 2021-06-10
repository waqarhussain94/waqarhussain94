import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import RNMediaEditor from 'react-native-media-editor';
// import Video from 'react-native-video';

import Video from '../components/Video';
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
  let {navigation, route} = props;
  const video = route.params.videoData;
  const VideoPlayer = useRef(null);
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [selectedColor, setColor] = useState('#1AD5AC');
  const [text, setText] = useState(null);

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
        onPress={ftn}
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

  function onEmbedButtonPress() {
    console.log('embed text on video');
    const options = {
      path: video,
      type: 'video',
      firstText: {
        left: 200,
        top: 200,
        backgroundOpacity: 0.5,
        text: text,
        fontSize: 23,
        textColor: selectedColor,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
      },
    };
    console.log('embed text on video',RNMediaEditor,RNMediaEditor.embedTextOnVideo);

    // RNMediaEditor.embedTextOnVideo(options)
    //   .then(res => {
    //     console.log('rrrrrr',res);
    //   })
    //   .catch(err => {
    //     console.log('errrrrr',err);
    //   });
  }

  return (
    <View style={styles.galleryContainer}>
      <Header
        navigation={navigation}
        arrowBack={'editvideo'}
        title="Add Text"
        nextbtn={() => navigation.navigate('addstyle', {videoData: video})}
      />
      <ScrollView style={{margin: 20}}>
        <View>
          {video && (
             <Video
             videoUri={video} // Can be a URL or a local file.
           />
            // <Video
            //   source={{uri: video}} // Can be a URL or a local file.
            //   ref={VideoPlayer} // Store reference
            //   style={styles.videoImage}
            //   paused={false}
            //   resizeMode={'cover'}
            //   controls={true}
            // />
          )}
          <TextInput
            style={[
              styles.inputText,
              {borderColor: selectedColor, color: selectedColor},
            ]}
            placeholderTextColor={selectedColor}
            placeholder="ADD YOUR TEXT HERE"
            onValueChange={text => setText(text)}
            value={text}
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
          {renderbtn('Done', () => onEmbedButtonPress())}
        </View>
      </ScrollView>
    </View>
  );
};

export default AddText;

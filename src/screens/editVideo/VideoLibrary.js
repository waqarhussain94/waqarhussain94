import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  FlatList,
  Platform,
  Image,
  TouchableOpacity,
  Text,
  PermissionsAndroid,
  ScrollView,
  TouchableHighlight,
  TouchableNativeFeedback,
} from 'react-native';
 import CameraRoll from '@react-native-community/cameraroll';
import Icon from 'react-native-vector-icons/AntDesign';
var RNFS=require("react-native-fs")
import styles from '../../styleSheet/Style';
import Header from '../../components/Header';
 import {launchCamera, launchImageLibrary} from 'react-native-image-picker';


const VideoLibrary = props => {
  let { navigation } = props;
  const [video, setVideo] = useState();

  const [selectVideo, setSelectVideo] = useState(null);

  const getPhotos = () => {
    var options = {
      title: 'Select Image',
      mediaType:'video',
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Choose Photo from Custom Option'
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
   };
   launchImageLibrary(options, response => {
      console.log('Response = ', response.assets[0].uri);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log(
          'User tapped custom button: ',
          response.customButton
        );
        alert(response.customButton);
      } else {
      navigation.navigate('editvideo', { videoData: response.assets[0].uri});

        //setFilePath(response);
      }
   });
  };

  const askPermission = async () => {
    if (Platform.OS === 'android') {
      const result = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Permission Explanation',
          message: 'ReactNativeForYou would like to access your photos!',
        },
      );
      if (result !== 'granted') {
        console.log('Access to pictures was denied');
        return;
      } else {
        getPhotos();
      }
    } else {
      getPhotos();
    }
  };

  useEffect(() => {
    askPermission();
  }, []);

  function videoMake() {
    ImagePicker.openCamera({
      mediaType: 'video',
    }).then(videores => {
      navigation.navigate('editvideo', { videoData: videores.path });
      // console.log(videores);
    });
  }

  const selectVideoftn = () => {
    if (selectVideo === null) {
      alert('Please select video!');
    } else {
      // dispatch({
      //   type: 'SET_VIDEO',
      //   // payload: "sdsdsds"
      //   payload: selectVideo.node.image.uri,
      // });
      RNFS.readFile(selectVideo.node.image.uri, path)
      .then((success) => {
        console.log('file get!');

      })
      .catch((err) => {
        console.log("Error: " + err.message); // <--- but copyFile returns "doesn't exists" error for temp.jpg
      });
      var path = RNFS.DocumentDirectoryPath + '/ENATOPS';
      RNFS.mkdir(path).then(async (success) => {
        RNFS.copyFile(selectVideo.node.image.uri, path)
          .then((success) => {
            console.log('file moved!');

          })
          .catch((err) => {
            console.log("Error: " + err.message); // <--- but copyFile returns "doesn't exists" error for temp.jpg
          });
      }).catch((err) => {
            
    });
    navigation.navigate('editvideo', { videoData: path});
    navigation.navigate('editvideo', { videoData: selectVideo.node.image.uri });
  }
};
return (
  <View style={styles.galleryContainer}>
    <Header
      navigation={navigation}
      arrowBack={'home'}
      title="Video library"
      nextbtn={() => selectVideoftn()}
    />

    <ScrollView>
      <View style={styles.gallerImages}>
        {video &&
          video.map((item, index) => {
            return (
              <TouchableOpacity onPress={() => setSelectVideo(item)}>
                <Image
                  source={{ uri: item.node.image.uri }}
                  style={[
                    styles.Imagegallery,
                    {
                      borderColor: '#1AD5AC',
                      borderWidth: item === selectVideo ? 3 : 0,
                    },
                  ]}
                />
              </TouchableOpacity>
            );
          })}
      </View>
    </ScrollView>
    <TouchableNativeFeedback onPress={() => videoMake()}>
      <Icon
        name={'camera'}
        style={{
          color: '#1AD5AC',
          fontSize: 50,
          position: 'absolute',
          bottom: 5,
          alignSelf: 'center',
          left: '42.5%',
          right: 0,
        }}
      />
    </TouchableNativeFeedback>
  </View>
);
};

export default VideoLibrary;

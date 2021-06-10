import React, {useState, useRef, useEffect} from 'react';
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
import ImagePicker from 'react-native-image-crop-picker';
import CameraRoll from '@react-native-community/cameraroll';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from '../../styleSheet/Style';
import Header from '../../components/Header';

const VideoLibrary = props => {
  let {navigation} = props;
  const [video, setVideo] = useState();

  const [selectVideo, setSelectVideo] = useState(null);

  const getPhotos = () => {
    CameraRoll.getPhotos({
      first: 50,
      assetType: 'Videos',
    })
      .then(res => {
        setVideo(res.edges);
        // console.log(res.edges);
      })
      .catch(error => {
        console.log(error);
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
      navigation.navigate('editvideo', {videoData: videores.path});
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
      navigation.navigate('editvideo', {videoData: selectVideo.node.image.uri});
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
                    source={{uri: item.node.image.uri}}
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

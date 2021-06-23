import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import Video from 'react-native-video';
import {createThumbnail} from 'react-native-create-thumbnail';
import Icon from 'react-native-vector-icons/AntDesign';
import * as Progress from 'react-native-progress';
import {
  VESDK,
  VideoEditorModal,
  Configuration,
  TintMode,
} from 'react-native-videoeditorsdk';

import styles from '../../styleSheet/Style';
import Header from '../../components/Header';

const EditVideo = props => {
  let {navigation, route} = props;
  const video = route.params.videoData;
  const VideoPlayer = useRef(null);
  const [videoImg, setVideoImg] = useState(null);
  const [seconds, setSeconds] = useState(0);
  const [paused, setPaused] = useState(false);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
     // if (seconds < video.duration) {
    //   // setSeconds(seconds + 1000)
    //   createThumbnail({
    //     url: video.path,
    //     timeStamp: seconds,
    //   })
    //     .then(response => {
    //       setVideoImg(response.path);
    //       console.log('reeeeeee', response.path);
    //     })
    //     .catch(err => console.log(err));
    // }
  });

  function secondsToTime(time) {
    return Math.floor(
      time / 60 + ':' + (time % 60 < 10 ? '0' : '') + (time % 60),
    );
  }
  function renderIcon(img, ftn) {
    return (
      <TouchableOpacity onPress={ftn}>
        <View style={[styles.iconBox]}>
          <Image style={styles.iconImage} source={img} />
        </View>
      </TouchableOpacity>
    );
  }

  function renderplusIcon(img, ftn) {
    return (
      <TouchableOpacity onPress={ftn}>
        <View style={[styles.iconBox]}>
          <Image style={styles.plusIcon} source={img} />
        </View>
      </TouchableOpacity>
    );
  }

  const OnProgress = async res => {
    // await setSeconds(res.currentTime * 1000);
    setProgress(res.currentTime / duration);
    // console.log('progress', res);
    // if(seconds < video.duration){
    // await  createThumbnail({
    //     url: video.path,
    //     timeStamp: seconds,
    //   })
    //     .then(response => {
    //       setVideoImg(response.path);
    //       console.log('reeeeeee', response.path);
    //     })
    //     .catch(err => console.log( err ));
    // }
  };
  const OnSeek = async res => {
    setSeconds(res.currentTime * 1000);
  };
  const OnLoad = async res => {
    setDuration(res.duration);
  };
  const OnEnd = async res => {
    setPaused(true);
  };
  const handlemainbuttonTouch = () => {
    if (progress > 1) {
      VideoPlayer.onSeek(0);
      setPaused(!paused);
    }
  };
  const handleProgressBar = e => {
    const position = e.nativeEvent.locationX;
    const progress = (position / 250) * duration;
    VideoPlayer.onSeek(progress);
  };
  // console.log(route)
  const openEditor = () => {
    // Set up sample video
    // let video = video;
    // Set up configuration
    let configuration = {
      // Configure sticker tool
      sticker: {
        // Enable personal stickers
        personalStickers: true,
        // Configure stickers
        categories: [
          // Create sticker category with stickers
          {
            identifier: 'example_sticker_category_logos',
            name: 'Logos',
            // thumbnailURI: require('./assets/React-Logo.png'),
            items: [
              {
                identifier: 'example_sticker_logos_react',
                name: 'React',
                // stickerURI: require('./assets/React-Logo.png'),
              },
              {
                identifier: 'example_sticker_logos_imgly',
                name: 'img.ly',
                // stickerURI: require('./assets/imgly-Logo.png'),
                tintMode: TintMode.SOLID,
              },
            ],
          },
          // Reorder and use existing sticker categories
          {identifier: 'imgly_sticker_category_animated'},
          {identifier: 'imgly_sticker_category_emoticons'},
          // Modify existing sticker category
          {
            identifier: 'imgly_sticker_category_shapes',
            items: [
              {identifier: 'imgly_sticker_shapes_badge_01'},
              {identifier: 'imgly_sticker_shapes_arrow_02'},
              {identifier: 'imgly_sticker_shapes_spray_03'},
            ],
          },
        ],
      },
    };
    VESDK.openEditor(videoImg !== null ? videoImg : video, configuration).then(
      result => {
        setVideoImg(result.video);
        console.log('yess', result);
      },
      error => {
        console.log(error);
      },
    );
  };
  return (
    <SafeAreaView style={styles.galleryContainer}>
      <Header
        navigation={navigation}
        arrowBack={'videolibrary'}
        title="Edit Video"
        nextbtn={() =>
          navigation.navigate('videosharing', {
            //videoData: videoImg !== null ? videoImg : video,
          })
        }
      />
      <ScrollView>
        {/* <Image
          source={require('../assets/gallery/edit.png')}
          style={styles.videoImage}
        /> */}
        {/* <VideoEditorModal visible={true} video={{uri: video}} /> */}
        {video && (
          <View>
            <Video
             source={{uri: video}} // Can be a URL or a local file.
              ref={VideoPlayer} // Store reference
              //  onBuffer={this.onBuffer}                // Callback when remote video is buffering
              //  onError={this.videoError}
              style={styles.videoImage}
              paused={false}
              resizeMode={'cover'}
              onProgress={OnProgress}
              onLoad={OnLoad}
              // currentPlaybackTime={res => console.log('playback time hgyt', res)}
              // useTextureView={res => console.log('suseTextureView', res)}
              // onPlaybackRateChange={(res) => console.log('every start end', res)}
              onEnd={OnEnd}
              onSeek={OnSeek}
              controls={false}
            />
            {/* <View style={styles.control}>
              <TouchableWithoutFeedback onPress={() => handlemainbuttonTouch()}>
                <Icon
                  name={!paused ? 'controller-play' : 'controller-paus'}
                  color={'#FFF'}
                  size={30}
                />
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => handleProgressBar()}>
                <Progress.Bar
                  progress={progress}
                  color={'#19D4AD'}
                  unfilledColor={'gray'}
                  width={200}
                  height={10}
                />
              </TouchableWithoutFeedback>
              <Text style={styles.duration}>
                {secondsToTime(Math.floor(progress * duration))}
              </Text>
            </View> */}
          </View>
        )}
        <View style={styles.lineRow}>
          {renderIcon(require('../../assets/icons/T.png'), () => openEditor())}
          {renderIcon(require('../../assets/icons/copy.png'), () =>
            openEditor(),
          )}
          {renderIcon(require('../../assets/icons/expand.png'), () =>
            openEditor(),
          )}
          {renderIcon(require('../../assets/icons/duration.png'), () =>
            openEditor(),
          )}
          {/*  <Icon name={'home'} style={[styles.IconImage,{backgroundColor: '#1AD5AC', padding: 10, borderRadius: 25}]} /> */}
        </View>
        <View style={styles.lineRow}>
          <Image
            source={require('../../assets/gallery/edit.png')}
            style={styles.smallImg}
          />
          {renderplusIcon(require('../../assets/icons/+.png'), () =>
            console.log('hello'),
          )}
          <Image
            // source={{uri: videoImg}}
            source={require('../../assets/gallery/edit.png')}
            style={styles.mediumImg}
          />
          {renderplusIcon(require('../../assets/icons/+.png'), () =>
            console.log('hello'),
          )}
          <Image
            source={require('../../assets/gallery/edit.png')}
            style={styles.smallImg}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditVideo;

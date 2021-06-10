import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import Video from 'react-native-video';
import {createThumbnail} from 'react-native-create-thumbnail';
import Icon from 'react-native-vector-icons/AntDesign';
import * as Progress from 'react-native-progress';

import styles from '../styleSheet/Style';
import Header from '../components/Header';

const EditVideo = props => {
  let {navigation, route} = props;
  const video = route.params.videoData;
  const VideoPlayer = useRef(null);
  const [videoImg, setVideoImg] = useState();
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
    return Math.floor(time / 60 + ':' + (time % 60 < 10 ? '0' : '') + (time % 60));
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
    console.log('progress', res);
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
  return (
    <View style={styles.galleryContainer}>
      <Header
        navigation={navigation}
        arrowBack={'videolibrary'}
        title="Edit Video"
        nextbtn={() => navigation.navigate('videotemplate', {videoData: video})}
      />
      <ScrollView>
        {/* <Image
          source={require('../assets/gallery/edit.png')}
          style={styles.videoImage}
        /> */}
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
          {renderIcon(require('../assets/icons/T.png'), () =>
            console.log('hello'),
          )}
          {renderIcon(require('../assets/icons/copy.png'), () =>
            console.log('hello'),
          )}
          {renderIcon(require('../assets/icons/expand.png'), () =>
            console.log('hello'),
          )}
          {renderIcon(require('../assets/icons/duration.png'), () =>
            console.log('hello'),
          )}
          {/*  <Icon name={'home'} style={[styles.IconImage,{backgroundColor: '#1AD5AC', padding: 10, borderRadius: 25}]} /> */}
        </View>
        <View style={styles.lineRow}>
          <Image
            source={require('../assets/gallery/edit.png')}
            style={styles.smallImg}
          />
          {renderplusIcon(require('../assets/icons/+.png'), () =>
            console.log('hello'),
          )}
          <Image 
          // source={{uri: videoImg}} 
          source={require('../assets/gallery/edit.png')}
          style={styles.mediumImg} />
          {renderplusIcon(require('../assets/icons/+.png'), () =>
            console.log('hello'),
          )}
          <Image
            source={require('../assets/gallery/edit.png')}
            style={styles.smallImg}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default EditVideo;

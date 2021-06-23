import React, {useRef} from 'react';
import {Text, TouchableOpacity, View, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Video from 'react-native-video';

import styles from '../styleSheet/Style';

export default function Header(props) {
  let {videoUri, OnProgress} = props;
  const VideoPlayer = useRef(null);
  return (
    <Video
      source={{uri: videoUri}} // Can be a URL or a local file.
      ref={VideoPlayer} // Store reference
      style={styles.videoImage}
      paused={false}
      resizeMode={'cover'}
      onProgress={OnProgress}
      controls={false}
    />
  );
}

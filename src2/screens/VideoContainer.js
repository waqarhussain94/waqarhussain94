import React from 'react';
import {ContextConsumer} from '../Store';
//import VideoLibrary from './VideoLibrary';
import VideoLibrary from './editVideo/VideoLibrary';
const VideoLibraryContainer = (props) => {
  let {navigation} = props;
  return (
    <ContextConsumer>
      {({dispatch}) => (
        <VideoLibrary
          navigation={navigation}
          dispatch={dispatch}
        />
      )}
    </ContextConsumer>
  );
};

export default VideoLibraryContainer;

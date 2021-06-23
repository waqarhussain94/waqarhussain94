import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import VideoLibrary from '../screens/editVideo/VideoLibrary';
import VideoSharing from '../screens/editVideo/VideoSharing';
import EditVideo from '../screens/editVideo/EditVideo';
import VideoTemplate from '../screens/editVideo/VideoTemplate';
import AddText from '../screens/editVideo/AddText';
import AddStyle from '../screens/editVideo/AddStyle';
import Form from '../screens/editVideo/Form';

const Stack = createStackNavigator();

function VideoStack() {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name="videolibrary" component={VideoLibrary} />
      <Stack.Screen name="editvideo" component={EditVideo} />
      <Stack.Screen name="videotemplate" component={VideoTemplate} />
      <Stack.Screen name="addtext" component={AddText} />
      <Stack.Screen name="addstyle" component={AddStyle} />
      <Stack.Screen name="videosharing" component={VideoSharing} />
      <Stack.Screen name="form" component={Form} />
    </Stack.Navigator>
  );
}

export default VideoStack;

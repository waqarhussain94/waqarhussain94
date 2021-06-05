import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import VideoLibrary from '../screens/VideoLibrary';
import VideoSharing from '../screens/VideoSharing';
import EditVideo from '../screens/EditVideo';
import VideoTemplate from '../screens/VideoTemplate';
import AddText from '../screens/AddText';
import AddStyle from '../screens/AddStyle';
import Form from '../screens/Form';

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

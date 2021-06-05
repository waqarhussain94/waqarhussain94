import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './screens/Login';
import VideoLibrary from './screens/VideoLibrary';
import EditVideo from './screens/EditVideo';
import Home from './screens/Home';
import Tabs from './navigations/BottomTab';

const Stack = createStackNavigator();

function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="videolibrary" component={Tabs} />
        {/* <Stack.Screen name="editvideo" component={EditVideo} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Route;

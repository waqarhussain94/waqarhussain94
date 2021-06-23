import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import VideoStack from './VideoStack';
import Setting from '../screens/Setting';
import Brightness from '../screens/Brightness';
import Gallery from '../screens/Gallery';
import Notification from '../screens/Notification';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
    initialRouteName="videolibrary"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => {
          let iconName = require('../assets/icons/magic.png');
          if (route.name === 'videolibrary') {
            iconName = require('../assets/icons/camera.png');
          }
          if (route.name === 'gallery') {
            iconName = require('../assets/icons/gallerytab.png');
          }
          if (route.name === 'settings') {
            iconName = require('../assets/icons/settings.png');
          }
          if (route.name === 'brightness') {
            iconName = require('../assets/icons/magic.png');
          }
          if (route.name === 'notification') {
            iconName = require('../assets/icons/magic.png');
          }

          return <Image source={iconName} style={{width: 20, resizeMode: 'contain'}} />;
        },
      })}>
      <Tab.Screen name="notification" component={Notification} />
      <Tab.Screen name="gallery" component={Gallery} />
      <Tab.Screen name="videolibrary" component={VideoStack} />
      <Tab.Screen name="brightness" component={Brightness} />
      <Tab.Screen name="settings" component={Setting} />
    </Tab.Navigator>
  );
}
export default MyTabs;

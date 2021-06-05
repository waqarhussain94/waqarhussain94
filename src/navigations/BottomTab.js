import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import VideoStack from './VideoStack';
import Setting from '../screens/Setting';
import Brightness from '../screens/Brightness';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => {
          let iconName = require('../assets/icons/gallerytab.png');
          if (route.name === 'videolibrary') {
            iconName = require('../assets/icons/gallerytab.png');
          }
          if (route.name === 'editvideo') {
            iconName = require('../assets/icons/camera.png');
          }
          if (route.name === 'settings') {
            iconName = require('../assets/icons/settings.png');
          }
          if (route.name === 'brightness') {
            iconName = require('../assets/icons/magic.png');
          }
        //   if (route.name === 'path') {
        //     iconName = require('../assets/icons/Path.png');
        //   }

          return <Image source={iconName} style={{width: 20, resizeMode: 'contain'}} />;
        },
      })}>
      <Tab.Screen name="videolibrary" component={VideoStack} />
      <Tab.Screen name="brightness" component={Brightness} />
      <Tab.Screen name="settings" component={Setting} />
    </Tab.Navigator>
  );
}
export default MyTabs;

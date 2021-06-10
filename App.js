import * as React from 'react';
import {LogBox} from 'react-native';

import Route from './src/Route';

function App() {
  LogBox.ignoreAllLogs(); //Ignore all log notifications
  return <Route />;
}

export default App;

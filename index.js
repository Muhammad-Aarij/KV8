/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import splashScreen1 from './src/screens/splash4/index.js';
import RoleSelectionScreen from './src/screens/roleSelectionScreen/RoleSelectionScreen.js';

AppRegistry.registerComponent(appName, () => RoleSelectionScreen);

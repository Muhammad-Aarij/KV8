/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './App.jsx';
import InstituteProfile from './src/screens/Profile/InstituteProfile.js';

AppRegistry.registerComponent(appName, () => InstituteProfile );

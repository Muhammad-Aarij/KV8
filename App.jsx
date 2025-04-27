import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import Home from './src/screens/Home/index';
import Splash1 from './src/screens/splash1/index';
import Splash2 from './src/screens/splash2/index';
import Splash3 from './src/screens/splash3/index';
import Splash4 from './src/screens/splash4/index';
import RoleSelectionScreen from "./src/screens/roleSelectionScreen/RoleSelectionScreen";
import OtpVerification from "./src/screens/Otp Verification/index";
import SignIn from "./src/screens/SignIn/index";
import SignIn from "./src/screens/SignIn/index";
import NotificationScreen from "./src/screens/NotificationScreen/index";
import NotificationAlertScreen from "./src/screens/NotificationAlertScreen/index";
import NewPassword from "./src/screens/New Password/index";
import ForgetPassword from "./src/screens/Forget Password/index";
import FAQScreen from "./src/screens/FAQScreen/index";
import ExamSchedule from "./src/screens/Exam Schedule/index";
import ChatScreen from "./src/screens/Chat Screen/index";


// Dummy Screens
const HomeScreen = () => <View><Text>Home Screen</Text></View>;
const SettingsScreen = () => <View><Text>Settings Screen</Text></View>;

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Calendar" component={Calendar} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={BottomTabs} options={{ headerShown: false }} />
        {/* <Stack.Screen name="Details" component={Calendar} /> */}
        <Stack.Screen name="Splash1" component={Splash1} />
        <Stack.Screen name="Splash2" component={Splash2} />
        <Stack.Screen name="Splash3" component={Splash3} />
        <Stack.Screen name="Splash4" component={Splash4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

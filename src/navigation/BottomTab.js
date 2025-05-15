import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Image } from 'react-native';
import { AssignmentBlack, UserBlack, User1, Assignment, Homegray, HomeBlack, graph, graphBlack } from '../assets/images';

import Home from '../screens/Home/index';
import Assignments from '../screens/Assignments/Index';
import Profile from '../screens/My Profile/index';
import FinanceDashboard from '../screens/FinanceDashboard';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabel: () => null,
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === 'Home') iconName = focused ? HomeBlack : Homegray;
          else if (route.name === 'Assignments') iconName = focused ? AssignmentBlack : Assignment;
          else if (route.name === 'Profile') iconName = focused ? UserBlack : User1;
          else if (route.name === 'Finance') iconName = focused ? graphBlack : graph;

          return (
            <View style={{ alignItems: 'center', marginTop: 5, width: 100 }}>
              <Image source={iconName} style={{ width: 25, height: 25, resizeMode: "contain" }} />
              <Text style={{ fontSize: 11, color: focused ? '#000' : '#aaa', marginTop: 2, fontFamily: "Urbanist-SemiBold" }}>
                {route.name}
              </Text>
            </View>
          );
        },
        tabBarStyle: {
          height: 65,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderColor: "#000000",
          borderTopWidth: 4,
          borderLeftWidth: 1,
          borderRightWidth: 1,
          paddingTop: 10,
          backgroundColor: '#fff',
        },
      })}
    >

      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Assignments" component={Assignments} />
      <Tab.Screen name="Finance" component={FinanceDashboard} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default BottomTabs;

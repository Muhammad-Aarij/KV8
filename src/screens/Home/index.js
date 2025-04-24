import React, { useState } from "react";
import { View, Text, ScrollView, TextInput, StyleSheet, TouchableOpacity, FlatList, Image } from "react-native";

import Header2 from "../../components/Header2";
import Community from "./Community";
import Messaging from "./Messaging";
import Classroom from "./Classroom";
import Grade from "./Grade";


const Index = () => {
  const [activeTab, setActiveTab] = useState("Community");
  const tabs = ["Community", "Classroom", "Grade Group", "Calendar", "Messaging"];


  return (
    <View style={styles.container}>

      <Header2 />

      <View style={{
        marginBottom: 15,
        borderBottomWidth: 1.5,
        borderBottomColor: "#E4E4E4",
        marginHorizontal: 20,

      }}>
        {/* Horizontal Tabs */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tabContainer}>
          {tabs.map((tab) => (
            <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)} style={[styles.tabButton, activeTab === tab && styles.activeTab]}>
              <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {activeTab == "Community" && <Community />}
      {activeTab == "Messaging" && <Messaging />}
      {activeTab == "Classroom" && <Classroom />}
      {activeTab == "Grade Group" && <Grade />}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  tabContainer: {
    paddingVertical: 15,

  },

  tabButton: {
    height: 35,
    paddingVertical: 6,
    paddingHorizontal: 18,
    borderRadius: 23,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#838383",
    marginRight: 10,
  },
  activeTab: {
    backgroundColor: "#838383",
  },
  tabText: {
    fontFamily: "Urbanist-Medium",
    fontSize: 14,
    color: "#838383",
  },
  activeTabText: {
    fontFamily: "Urbanist-Bold",
    color: "#fff",
  },
});


export default Index;

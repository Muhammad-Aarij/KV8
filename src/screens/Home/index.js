// screens/HomeScreen.js
import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Header2 from '../../components/Header2';

const Index = () => {
  const [activeTab, setActiveTab] = useState('Community');
  const tabs = ['Community', 'Classroom', 'Grade Group', 'Calender', 'Messaging'];

  return (
    <View style={{ backgroundColor: 'white' }}>
      <Header2 />

      {/* Horizontal Tabs */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabContainer}
      >
        {tabs.map(tab => (
          <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)} style={[
            styles.tabButton,
            activeTab === tab && styles.activeTab
          ]}>
            <Text style={[
              styles.tabText,
              activeTab === tab && styles.activeTabText
            ]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Write Something Input */}
      <TextInput
        style={styles.input}
        placeholder="Write something..."
        placeholderTextColor="#999"
      />

      {/* Filters */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.filterContainer}
      >

        <View style={styles.filters}>
          {['News', 'Social Media', 'Assignments', 'Important'].map(tag => (
            <TouchableOpacity key={tag} style={styles.filterBtn}>
              <Text style={styles.filterText}>{tag}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Posts */}
      <ScrollView style={{ marginTop: 10, paddingHorizontal: 16, flex: 1, flexGrow: 1, }}>
        {[1, 2].map((item, index) => (
          <View key={index} style={styles.postCard}>
            <View style={styles.postHeader}>
              <Text style={styles.postUser}>Andrew White</Text>
              <Text style={styles.postMeta}>2 hours ago · Announcement</Text>
            </View>
            <Text style={styles.postTitle}>School’s roadmap – what’s coming soon</Text>
            <Text style={styles.postBody}>
              Lorem ipsum dolor sit amet consectetur. Pellentesque platea placerat bibendum...
            </Text>
          </View>
        ))}
      </ScrollView>

     
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    paddingHorizontal: 16,
    paddingVertical: 15,
    // paddingTop: 15,
    // borderBottomWidth:3,
    // marginBottom: 15,
    borderBottomColor: '#838383',
    // borderWidth:,
    // borderColor:'#ddd',
  },
  filterContainer: {
    paddingHorizontal: 16,
    // paddingVertical: 15,
    // paddingTop: 15,
    // borderBottomWidth:3,
    // marginBottom: 15,
    borderBottomColor: '#838383',
    // borderWidth:,
    // borderColor:'#ddd',
  },
  tabButton: {
    paddingVertical: 6,
    paddingHorizontal: 18,
    borderRadius: 23,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#838383',
    marginRight: 10,
  },
  activeTab: {
    backgroundColor: '#838383',
  },
  tabText: {
    fontFamily: "Urbanist-Medium",
    fontSize: 14,
    color: '#838383',
  },
  activeTabText: {
    fontFamily: "Urbanist-Bold",
    color: '#fff',
  },
  input: {
    marginHorizontal: 16,
    backgroundColor: '#F8F8F8',
    borderWidth: 1,
    borderColor: '#DBDBDB',
    borderRadius: 12,
    paddingHorizontal: 27,
    paddingVertical: 14,
    marginBottom: 20,
    fontSize: 14,
  },
  filters: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 5,
    gap: 8,
  },
  filterBtn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#eee',
    borderRadius: 16,
  },
  filterText: {
    fontSize: 13,
    color: '#333',
  },
  postCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
  },
  postHeader: {
    marginBottom: 4,
  },
  postUser: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  postMeta: {
    fontSize: 12,
    color: '#777',
  },
  postTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    marginVertical: 6,
  },
  postBody: {
    fontSize: 13,
    color: '#555',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderTopWidth: 0.5,
    borderColor: '#ddd',
  },
});

export default Index;

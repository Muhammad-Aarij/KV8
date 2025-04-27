import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, SafeAreaView, Image } from 'react-native';
import { Calendarimg } from '../../assets/images';
import DateSlider from '../../components/DateSlider';


// Dummy event data (3 timeline items)
const events = [
  { id: 1, title: "Parents Teacher Meeting", time: "9:30 AM - 10:15 AM", date: "16 Feb" },
  { id: 2, title: "Math Class", time: "10:30 AM - 11:30 AM", date: "16 Feb" },
  { id: 353, title: "Science Lab", time: "12:00 PM - 1:30 PM", date: "16 Feb" },
  { id: 32134, title: "Science Lab", time: "12:00 PM - 1:30 PM", date: "16 Feb" },
  { id: 3214, title: "Science Lab", time: "12:00 PM - 1:30 PM", date: "16 Feb" },
  { id: 3, title: "Science Lab", time: "12:00 PM - 1:30 PM", date: "16 Feb" },
];

export default function Calendar() {

  return (
    <SafeAreaView style={styles.container}>
      {/* Month Header */}
      <View style={styles.header}>
        <Image style={styles.icon} source={Calendarimg} />
        <Text style={styles.monthText}>Feb, 2024</Text>
      </View>

      {/* Date Navigation */}
      <DateSlider />

      {/* Timeline and Events (3 Items) */}
      <ScrollView contentContainerStyle={styles.timelineContainer}>
        {events.map((event) => (
          <View key={event.id} style={styles.eventRow}>
            {/* Time Column */}
            <View style={styles.timeColumn}>
              <Text style={styles.timeLabel}>{event.time.split(" - ")[0]}</Text>
              <Text style={styles.timeSmall}>{event.time.split(" - ")[1]}</Text>
            </View>

            {/* Vertical Line and Circle */}
            <View style={styles.lineColumn}>
              <View style={styles.circle} />
              <View style={styles.verticalLine} />
            </View>

            {/* Event Details */}
            <View style={styles.eventCard}>
              <View style={{ flexDirection: "row", }}>
                <View style={{
                  backgroundColor: "#303030", paddingVertical: 8, paddingHorizontal: 15,
                  justifyContent: "center", alignItems: "center", borderRadius: 7, marginRight: 10, marginBottom: 15,
                }}>
                  <Text style={{ color: "#ffffff", fontFamily: "Urbanist-Bold", fontSize: 14 }}>16</Text>
                  <Text style={{ color: "#ffffff", fontFamily: "Urbanist-Medium", fontSize: 12, marginTop: 2, }}>Feb</Text>
                </View>
                <Text style={styles.eventTitle}>{event.title}</Text>
              </View>
              <Text style={styles.eventTime}>{event.time}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 20 },
  header: { marginBottom: 15, flexDirection: "row", gap: 10, alignItems: "center" },
  icon: { width: 24, height: 24 },
  monthText: { fontSize: 20, fontFamily: "Urbanist-Bold" },

  eventRow: { flexDirection: 'row', marginBottom: 5 },
  timeColumn: { width: 70, },
  timeLabel: { fontSize: 15, fontFamily: "Urbanist-SemiBold", color: "#000", marginBottom: 5 },
  timeSmall: { fontSize: 12, color: "gray", marginTop: 10 },

  lineColumn: { width: 30, alignItems: "center" },
  circle: { width: 10, height: 10, borderRadius: 20, borderWidth: 2, backgroundColor: "#ffffff", marginVertical: 5 },
  verticalLine: { width: 2, flex: 1, backgroundColor: "black" },

  eventCard: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#DBDBDB",
    marginTop: 20,
  },
  eventTitle: { fontSize: 14, fontFamily: "Urbanist-SemiBold", marginBottom: 5, width: "70%" },
  eventTime: { fontSize: 12, fontFamily: "Urbanist-Regular", color: "#000000" },
});

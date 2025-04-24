import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import theme from "../themes/theme";
import RadialProgress from "./RadialProgress";

export default function ClassroomCard({ title, students, teacher, email, attendance, image }) {
  return (
    <View style={styles.card}>
      {/* Classroom Info */}
      <Text style={styles.cardTitle}>{title}</Text>
      <View style={styles.studentCount}>
        <Text style={styles.cardSubtitleNumber}>{students}</Text>
        <Text style={styles.cardSubtitle}>Students</Text>
      </View>

      {/* Attendance */}
      <RadialProgress progress={attendance} />

      {/* Assigned Teacher */}
      <Text style={styles.assignTitle}>Assign to:</Text>
      <View style={styles.teacherInfo}>
        <View style={styles.teacherDetails}>
          <Image style={styles.teacherImage} source={image} />
          <View>
            <Text style={styles.cardTeacher}>{teacher}</Text>
            <Text style={styles.mail}>{email}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.enterBtn}>
          <Text style={styles.enterBtnText}>Enter Class</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: "flex-start",
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
    padding: 14,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#DBDBDB",
  },
  cardTitle: {
    fontFamily: "Urbanist-Bold",
    fontSize: 14,
    color: theme.colors.text,
  },
  studentCount: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 2,
  },
  cardSubtitle: {
    fontFamily: "Urbanist-Bold",
    fontSize: 14,
    color: "#494949",
    marginBottom: 7,
  },
  cardSubtitleNumber: {
    fontFamily: "Urbanist-Bold",
    fontSize: 38,
    color: "#494949",
  },
  assignTitle: {
    fontFamily: "Urbanist-Medium",
    color: "#000000",
    marginTop: 20,
    marginBottom: 5,
    fontSize: 12,
  },
  teacherInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  teacherDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  teacherImage: {
    width: 26,
    height: 28,
    resizeMode: "cover",
    borderRadius: 50,
    marginRight: 10,
  },
  cardTeacher: {
    fontSize: 13,
    fontFamily: "Urbanist-Bold",
    color: theme.colors.text,
  },
  mail: {
    fontSize: 12,
    fontFamily: "Urbanist-Medium",
    color: "#5D5D5D",
  },
  enterBtn: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 11,
    paddingHorizontal: 20,
    borderRadius: 86,
    alignItems: "center",
  },
  enterBtnText: {
    color: "#fff",
    fontSize: 12,
    fontFamily: "Urbanist-Bold",
    letterSpacing: 0.3,
  },
});


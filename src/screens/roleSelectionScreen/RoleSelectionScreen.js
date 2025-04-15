import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import theme from "../theme"; // Import theme colors
import logo from "../../assets/logo.png";
import adminIcon from "../../assets/admin.png";
import teacherIcon from "../../assets/teacher.png";
import parentIcon from "../../assets/parent.png";
import studentIcon from "../../assets/student.png";

export default function RoleSelectionScreen() {
  const roles = [
    { title: "Administrator", description: "Oversee management & coordination.", icon: adminIcon },
    { title: "Teacher", description: "Deliver lessons & guide students.", icon: teacherIcon },
    { title: "Parent", description: "Monitor child progress & communicate.", icon: parentIcon },
    { title: "Student", description: "Access learning resources & updates.", icon: studentIcon },
  ];

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image style={styles.logo} source={logo} />
      <Text style={styles.title}>KV8 School</Text>
      <Text style={styles.subTitle}>Enhancing learning & teaching experience</Text>

      {/* Role Selection Buttons */}
      {roles.map((role, index) => (
        <TouchableOpacity key={index} style={styles.roleButton} onPress={() => console.log(`${role.title} selected`)}>
          <Image style={styles.icon} source={role.icon} />
          <View>
            <Text style={styles.roleTitle}>{role.title}</Text>
            <Text style={styles.roleDescription}>{role.description}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: theme.colors.primary,
    marginVertical: 10,
  },
  subTitle: {
    fontSize: 16,
    color: theme.colors.text,
    marginBottom: 30,
    textAlign: "center",
  },
  roleButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.secondary,
    padding: 15,
    borderRadius: 10,
    width: "100%",
    marginBottom: 15,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 15,
    resizeMode: "contain",
  },
  roleTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: theme.colors.text,
  },
  roleDescription: {
    fontSize: 14,
    color: theme.colors.border,
  },
});


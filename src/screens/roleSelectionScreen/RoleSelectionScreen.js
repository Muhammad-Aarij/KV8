import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground, ScrollView } from "react-native";
import theme from "../../themes/theme";
import logo from "../../assets/logo.png";
import adminIcon from "../../assets/role1.png";
import teacherIcon from "../../assets/role2.png";
import parentIcon from "../../assets/role3.png";
import studentIcon from "../../assets/role3.png"; // Changed to avoid duplicate
import bg from "../../assets/Head.png";

export default function RoleSelectionScreen() {
    const roles = [
        {
            title: "Administrator",
            description: "Administrators oversee the overall management and operations of the school. They handle policies, staffing, and ensure smooth coordination between teachers, students, and parents.",
            icon: adminIcon,
        },
        {
            title: "Teacher",
            description: "Teachers are responsible for delivering lessons, guiding students, and maintaining academic records. They play a crucial role in shaping students' learning experiences.",
            icon: teacherIcon,
        },
        {
            title: "Parent",
            description: "Parents stay informed about their child's academic progress, school events, and communicate with teachers and administrators to support their child's education.",
            icon: parentIcon,
        },
        {
            title: "Student",
            description: "Parents stay informed about their child's academic progress, school events, and communicate with teachers and administrators to support their child's education.",
            icon: studentIcon,
        },
    ];

    return (
        <View style={styles.container}>
            {/* Header with Logo */}
            <ImageBackground style={styles.header} source={bg}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={logo} />
                </View>
                <Text style={styles.subTitle}>Enhancing learning & teaching experience</Text>
                <Text style={styles.role}>Select Role</Text>
                <Text style={styles.roleDescr}>
                    Please choose your role to continue. Select the role that best describes your position within the organization.                </Text>
            </ImageBackground>

            {/* Scrollable Role Selection */}
            <ScrollView contentContainerStyle={styles.roleContainer} showsVerticalScrollIndicator={false}>
                {roles.map((role, index) => (
                    <TouchableOpacity key={index} style={styles.roleButton} onPress={() => console.log(`${role.title} selected`)}>
                        <View style={styles.iconContainer}>
                            <Image style={styles.icon} source={role.icon} />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.roleTitle}>{role.title}</Text>
                            <Text style={styles.roleDescription}>{role.description}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        alignItems: "center",
    },
    header: {
        paddingTop: 40,
        width: "100%",
        minHeight: 200,
        resizeMode: "cover",
        alignItems: "flex-start",
        // paddingHorizontal: 20,
    },
    logoContainer: {
        width: "100%",
        padding: 10,
        backgroundColor: "#FFFFFF0D",
        alignItems: "center",
    },
    logo: {
        width: "100%",
        height: 50,
        resizeMode: "contain",
    },
    subTitle: {
        fontFamily: "Urbanist-Bold",
        fontSize: 20,
        color: "white",
        // fontWeight:"800",
        marginVertical: 25,
        marginLeft: 20,
    },
    role: {
        fontFamily: "Urbanist-Bold",
        fontSize: 15,
        color: "white",
        marginBottom: 10,
        // fontWeight: "bold",
        marginLeft: 20,

    },
    roleDescr: {
        fontFamily: "Urbanist-Medium",
        fontSize: 14,
        color: "white",
        marginBottom: 30,
        marginLeft: 20,
    },
    roleContainer: {
        paddingVertical: 20,
        alignItems: "center",
        width: "100%",
    },
    roleButton: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 15,
        width: "90%",
        marginBottom: 15,
        borderWidth: 1,
        borderColor: theme.colors.primary,
        overflow: "hidden",
        backgroundColor: "white",
    },
    iconContainer: {
        padding: 25,
        marginRight: 15,
        backgroundColor: theme.colors.primary,
        alignItems: "center",
    },
    icon: {
        width: 55,
        height: 55,
        resizeMode: "contain",
    },
    textContainer: {
        flex: 1,
    },
    roleTitle: {
        marginRight: 15,
        marginBottom: 3,
        fontSize: 15,
        fontFamily: "Urbanist-Bold",
        color: theme.colors.text,
    },
    roleDescription: {
        marginRight: 15,
        fontFamily: "Urbanist-Medium",
        fontSize: 11,
        color: theme.colors.text,
    },
});


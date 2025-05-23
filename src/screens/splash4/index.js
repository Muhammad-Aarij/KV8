import React, { useEffect, useRef } from "react";
import { View, Text, Image, Animated, StyleSheet, TouchableOpacity } from "react-native";
import theme from "../../themes/theme";
import logo from "../../assets/splash4.png";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

export default function Index() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Centered Logo with Animated Border */}
            <Image style={styles.logo} source={logo} />

            {/* Welcome Text */}
            <Text style={styles.text}>Your School, Your Community</Text>
            <Text style={styles.subText}>
                Engage in private, secure messaging and keep track of your child’s progress.
            </Text>
            <View style={styles.dotContainer}>

                <View style={styles.cirlce}></View>
                <View style={styles.cirlce}></View>
                <View style={styles.rectangle}></View>

            </View>
            <Button title={"Get Started"} onPress={() => { navigation.navigate("Role Selection") }} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: theme.colors.background,
        padding: 30,
    },
    logoContainer: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 500,
        borderColor: theme.colors.border,
        padding: 40,
        backgroundColor: "#fff",
    },
    logo: {
        width: "100%",
        flex: 1,
        resizeMode: "contain",
    },
    text: {
        fontSize: 20,
        // fontWeight: "bold",
        color: theme.colors.text,
        textAlign: "center",
        marginTop: 20,
        fontFamily:"Urbanist-Bold",
    },
    subText: {
        fontFamily:"Urbanist-Medium",
        fontSize: 15,
        color: theme.colors.text,
        textAlign: "center",
        marginTop: 10,
    },
    left: {
        position: "absolute",
        top: 0,
        left: 0,
        width: 47,
        height: 119,
        resizeMode: "contain",
    },
    right: {
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 53,
        height: 120,
        resizeMode: "contain",
    },
    dotContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 30,
    },
    cirlce: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: theme.colors.primary,
        marginHorizontal: 5,
    },
    rectangle: {
        width: 30,
        height: 10,
        borderRadius: 5,
        backgroundColor: theme.colors.text,
        // marginHorizontal: 5,
    },
});

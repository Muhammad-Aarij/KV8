import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import theme from "../../themes/theme";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

import splash1 from "../../assets/splash2.png";
import splash2 from "../../assets/splash3.png";
import splash3 from "../../assets/splash4.png";

export default function SplashScreen() {
    const navigation = useNavigation();
    const [currentIndex, setCurrentIndex] = useState(0);

    const screens = [
        {
            image: splash1,
            title: "Seamless School Communication",
            subtitle: "Stay connected with teachers, parents, and administrators—all in one secure app.",
            dots: ["rectangle", "circle", "circle"],
        },
        {
            image: splash2,
            title: "Instant Notifications & Updates",
            subtitle: "Never miss important announcements, attendance alerts, or event reminders.",
            dots: ["circle", "rectangle", "circle"],
        },
        {
            image: splash3,
            title: "Your School, Your Community",
            subtitle: "Engage in private, secure messaging and keep track of your child’s progress.",
            dots: ["circle", "circle", "rectangle"],
        },
    ];

    const handleNext = () => {
        if (currentIndex < screens.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            navigation.navigate("Role Selection");
        }
    };

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={screens[currentIndex].image} />
            <Text style={styles.text}>{screens[currentIndex].title}</Text>
            <Text style={styles.subText}>{screens[currentIndex].subtitle}</Text>

            {/* Dot Indicators */}
            <View style={styles.dotContainer}>
                {screens[currentIndex].dots.map((dot, index) => (
                    <View key={index} style={dot === "rectangle" ? styles.rectangle : styles.circle} />
                ))}
            </View>

            <Button title={currentIndex === screens.length - 1 ? "Get Started" : "Continue"} onPress={handleNext} />
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
    logo: {
        width: "100%",
        flex: 1,
        resizeMode: "contain",
    },
    text: {
        fontSize: 20,
        fontFamily: "Urbanist-Bold",
        color: theme.colors.text,
        textAlign: "center",
        marginTop: 20,
    },
    subText: {
        fontFamily: "Urbanist-Medium",
        fontSize: 15,
        color: theme.colors.text,
        textAlign: "center",
        marginTop: 10,
    },
    dotContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 30,
    },
    circle: {
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
    },
});

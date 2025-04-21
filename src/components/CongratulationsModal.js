import React, { useEffect, useRef } from "react";
import { Image, Modal, StyleSheet, Text, View, Animated } from "react-native";
// import tick from "../assets/modaltick.png";
// import spinner from "../assets/spinner.png";
import { tick,spinner } from "../assets/images";

export default function CongratulationsModal({ visible }) {
    const spinValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.timing(spinValue, {
                toValue: 1,
                duration: 1500, // 1 second rotation speed
                useNativeDriver: true, // Enable hardware acceleration
            })
        ).start();
    }, []);

    const spinAnimation = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "360deg"],
    });

    return (
        <Modal visible={visible} animationType="fade" transparent={true}>
            <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                    <Image style={styles.tickImage} source={tick} />
                    <Text style={styles.title}>Congratulations!</Text>
                    <Text style={styles.message}>
                        Your account is ready to use. You will be redirected to the Home page in a few seconds...
                    </Text>
                    <Animated.Image
                        style={[styles.spinner, { transform: [{ rotate: spinAnimation }] }]}
                        source={spinner}
                    />
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)", // Light black transparent background
        justifyContent: "center",
        alignItems: "center",
    },
    modalContainer: {
        width: 270,
        padding: 30,
        paddingVertical: 40,
        backgroundColor: "white",
        borderRadius: 15,
        alignItems: "center",
    },
    tickImage: {
        width: 100,
        height: 100,
        resizeMode: "contain",
    },
    title: {
        fontFamily: "Urbanist-Bold",
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20,
    },
    message: {
        fontFamily: "Urbanist-Medium",
        fontSize: 16,
        textAlign: "center",
        marginTop: 10,
        fontSize: 14,
        color: "#333",
    },
    spinner: {
        width: 30,
        height: 30,
        resizeMode: "contain",
        marginTop: 35,
    },
});

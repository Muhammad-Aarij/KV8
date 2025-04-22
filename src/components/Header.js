import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import theme from "../themes/theme";
import { arrow } from "../assets/images";
export default function Header({ title, onPress }) {
    return (
        <View style={styles.header} >
            <Pressable onPress={onPress}>
                <Image style={styles.logo} source={arrow} />
            </Pressable>

            <Text style={styles.title}>{title}</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        paddingHorizontal: 20,
        paddingTop: 30,
        gap: 20,
    },
    logo: {
        width: 22,
        height: 22,
        resizeMode: "contain",
    },
    title: {
        fontSize: 20,
        fontFamily: "Urbanist-Bold",
        color: "black",

    },
});

import React from 'react';
import { User } from '../assets/images';
import theme from '../themes/theme';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function MessageTile() {
    const navigation = useNavigation();
    return (
        <View style={styles.card}>
            <View style={styles.userInfo}>
                <Image style={styles.userImage} source={User} />
                <View>
                    <Text style={styles.userName}>Andrew Ainsley</Text>
                    <Text style={styles.userEmail}>AndrewAinsley@21gmail.io</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.messageButton} onPress={()=>navigation.navigate("ChatScreen")}>
                <Text style={styles.messageText}>Message</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#f9f9f9",
        borderRadius: 13,
        padding: 11,
        marginTop: 10,
        borderWidth: 1,
        borderColor: "#E0E0E0",
    },
    userInfo: {
        flexDirection: "row",
        alignItems: "center",
    },
    userImage: {
        width: 34,
        height: 34,
        borderRadius: 100,
        resizeMode: "cover",
        marginRight: 10,
    },
    userName: {
        fontFamily: "Urbanist-Bold",
        fontSize: 14,
        color: theme.colors.text,
    },
    userEmail: {
        fontFamily: "Urbanist-Medium",
        fontSize: 11,
        color: "#5D5D5D",
    },
    messageButton: {
        backgroundColor: theme.colors.darkGray,
        paddingVertical: 5,
        paddingHorizontal: 25,
        borderRadius: 6,
    },
    messageText: {
        fontFamily: "Urbanist-Medium",
        fontSize: 12,
        color: "#FFFFFF",
    },
});

// components/Header.js
import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, Pressable } from 'react-native';
import Head from '../assets/Head.png';
import bell from '../assets/bell.png';
import user from '../assets/user.png';
import { useNavigation } from '@react-navigation/native';

const Header2 = ({ }) => {
    const navigation = useNavigation();
    return (
        <ImageBackground source={Head} style={styles.header}>
            <View style={styles.line}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <Image
                        source={user}
                        style={styles.user}
                    />
                    <View>
                        <Text style={styles.greeting}>Good Morning 👋</Text>
                        <Text style={styles.username}>Andrew Ainsley</Text>
                    </View>
                </View>
                <Pressable onPress={() => navigation.navigate("NotificationAlert")}>
                    <Image
                        source={bell}
                        style={styles.avatar}
                    />
                </Pressable>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    header: {
        paddingVertical: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#0B0F1D',
    },
    line: {
        width: '100%',
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: "#FFFFFF0D",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    greeting: {
        fontFamily: "Urbanist-Light",
        color: 'white',
        fontSize: 14,
    },
    username: {
        color: 'white',
        fontFamily: "Urbanist-Bold",
        // fontWeight: 'bold',
        fontSize: 16,
        marginTop: 3,
    },
    user: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
        // borderRadius: 20,
    },
    avatar: {
        width: 45,
        height: 45,
        // borderRadius: 20,
    },
});

export default Header2;

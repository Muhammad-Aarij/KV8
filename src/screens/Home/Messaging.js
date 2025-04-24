import React from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import MessageTile from '../../components/MessageTile'
import { Search } from '../../assets/images'

export default function Messaging() {
    return (
        <View style={{ flex: 1, backgroundColor: "white", paddingHorizontal: 20 }}>
            <View style={styles.InputContainer}>
                <Image style={{ width: 20, height: 20, resizeMode: "contain" }} source={Search} />
                <TextInput style={styles.input} placeholder="Search Here" placeholderTextColor="#999"  />
            </View>
            <Text style={styles.heading}>
                Teachers List
            </Text>

            <MessageTile />
            <MessageTile />
            <MessageTile />


        </View>
    )
}
const styles = StyleSheet.create({
    InputContainer: {
        gap: 10,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F8F8F8",
        borderWidth: 1,
        borderColor: "#DBDBDB",
        borderRadius: 12,
        marginBottom: 15,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    input: {
        // borderWidth: 1,
        fontFamily: "Urbanist-Medium",
        color: "black",
        fontSize: 14,
    },
    heading: {
        fontFamily: "Urbanist-Bold",
        fontSize: 15,
    },
    card: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#f9f9f9",
        borderRadius: 13,
        padding: 14,
        marginTop: 10,
        borderWidth: 1,
        borderColor: "#E0E0E0",
    },
})


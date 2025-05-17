import React from 'react'
import { StyleSheet, View, Text, Pressable, } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function ExamTile({ }) {
    const navigation = useNavigation();
    return (
        <View style={styles.postCard}>
            <View style={styles.AssignmentHead}>
                <Text style={{ ...styles.postTitle, }}>
                    Mid Term Examination 2025
                </Text>
            </View>
            <Text style={{ ...styles.postBody, marginTop: 0 }}>
                Lorem ipsum dolor sit amet consectetur.
            </Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ ...styles.postMeta, fontSize: 12 }}>25 July - 10 Aug 2025</Text>
                <Pressable onPress={() => navigation.navigate("ExamSchedule")} style={{ backgroundColor: "#838383", paddingVertical: 5, paddingHorizontal: 10, borderRadius: 15, }}>
                    <Text style={{ fontFamily: "Urbanist-Medium", fontSize: 11, color: "#ffffff" }}>
                        View Schedule
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    postCard: {
        backgroundColor: "#f9f9f9",
        borderRadius: 13,
        padding: 14,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: "#E0E0E0",
    },
    postHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 12,
        marginBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#E4E4E4",
    },
    user: {
        width: 30,
        height: 30,
        borderRadius: 100,
        marginRight: 8,
        resizeMode: "cover",
    },
    dots: {
        width: 24,
        height: 24,
        resizeMode: "contain",
    },
    postUser: {
        fontFamily: "Urbanist-Bold",
        fontSize: 14,
    },
    postMeta: {
        fontFamily: "Urbanist-Medium",
        fontSize: 13,
        color: "#000000",
    },
    postTitle: {
        fontFamily: "Urbanist-Bold",
        fontSize: 13,
    },
    postBody: {
        fontFamily: "Urbanist-Medium",
        fontSize: 13,
        lineHeight: 20,
        color: "#000000",
        marginTop: 5,
        marginBottom: 10,
    },
    AssignmentHead: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
})
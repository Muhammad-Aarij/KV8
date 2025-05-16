import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { User } from '../assets/images';

export default function FinanceStudentCard({ name, grade, status }) {
    return (
        <View style={styles.card}>
            <View style={styles.row}>
                <Image source={User} style={styles.image} />
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.grade}>{grade}</Text>
                </View>
            </View>
            <View style={[styles.statusContainer, { backgroundColor: status === 'Paid' ? 'green' : 'red' }]}>
                <Text style={styles.statusText}>{status}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: "#F8F8F8",
        borderColor: "#DBDBDB",
        flexDirection: "row",
        height: "auto",
        padding: 12,
        marginBottom: 10,
        justifyContent: "space-between",
        alignItems: "center",
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    image: {
        width: 35,
        height: 35,
        borderRadius: 100,
    },
    name: {
        fontFamily: "Urbanist-SemiBold",
        fontSize: 14,
    },
    grade: {
        fontFamily: "Urbanist-Medium",
        fontSize: 12,
        color: "#5D5D5D",
        marginTop: 3,
    },
    statusContainer: {
        width: 100,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 7,
        paddingHorizontal: 10,
        borderRadius: 9,
        overflow: "hidden",
    },
    statusText: {
        color: "#ffffff",
        fontFamily: "Urbanist-SemiBold",
        fontSize: 13,
    },
});


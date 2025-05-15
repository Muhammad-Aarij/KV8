import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { User } from '../assets/images'

export default function FinanceStudentCard({ name, grade, status }) {
    return (
        <View style={styles.card}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                <Image source={User} style={{ width: 35, height: 35, borderRadius: 100, }} />
                <View>
                    <Text style={{ fontFamily: "Urbanist-SemiBold", fontSize: 14 }}>{name}</Text>
                    <Text style={{ fontFamily: "Urbanist-Medium", fontSize: 12, color: "#5D5D5D" }}>{grade}</Text>
                </View>
            </View>
            <View style={{ width: 100, flexDirection: "row", alignItems: "center", justifyContent: "center", paddingVertical: 7, paddingHorizontal: 10, backgroundColor: status === 'Paid' ? 'green' : 'red', borderRadius: 9, overflow: "hidden" }}>
                <Text style={{ color: "#ffffff", fontFamily: "Urbanist-SemiBold", fontSize: 13, }}>{status}</Text>
            </View>
        </View>
    )
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
    }
})

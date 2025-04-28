import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { User, dots } from '../assets/images'

export default function NewsTile({ user = "Name", time = "00:00", category = "General", title = "Heading", body = "Description" }) {
    return (
        <View style={styles.postCard}>
            <View style={styles.postHeader}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.user} source={User} />
                    <View>
                        <Text style={styles.postUser}>{user}</Text>
                        <Text style={styles.postMeta}>{time} · {category}</Text>
                    </View>
                </View>
                <Image style={styles.dots} source={dots} />
            </View>
            <Text style={styles.postTitle}>{title}</Text>
            <Text style={styles.postBody}>{body}</Text>
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
        fontSize: 12,
        color: "#8C8C8C",
    },
    postTitle: {
        fontFamily: "Urbanist-Bold",
        fontSize: 15,
    },
    postBody: {
        fontFamily: "Urbanist-Medium",
        fontSize: 13,
        lineHeight: 20,
        color: "#555",
        marginTop: 5,
        marginBottom: 10,
    },

})

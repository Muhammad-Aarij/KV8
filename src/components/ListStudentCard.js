import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';


export default function ListStudentCard({ name, email, image }) {
    return (
        <View style={styles.card}>
            <View style={styles.profileRow}>
                <Image source={image} style={styles.avatar} />
                <View style={styles.textSection}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.email}>{email}</Text>
                </View>
            </View>

            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.editBtn}>
                    <Text style={styles.editText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.deleteBtn}>
                    <Text style={styles.deleteText}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>)
}

const styles = StyleSheet.create({

    card: {
        backgroundColor: '#F8F8F8',
        borderRadius: 16,
        borderColor: '#DBDBDB',
        borderWidth: 1,
        paddingVertical: 12,
        paddingHorizontal: 15,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 4,
    },
    profileRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    avatar: {
        width: 34,
        height: 34,
        borderRadius: 24,
        marginRight: 10,
    },
    textSection: {
        flex: 1,
    },
    name: {
        fontSize: 14,
        fontFamily: 'Urbanist-Bold',
        color: '#000',
    },
    email: {
        fontSize: 12,
        fontFamily: 'Urbanist-Regular',
        color: '#555',
    },
    buttonRow: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
    },
    editBtn: {
        // flex: 1,
        width: 130,
        backgroundColor: '#000',
        paddingVertical: 10,
        borderRadius: 8,
        // marginRight: 8,
        alignItems: 'center',
    },
    deleteBtn: {
        // flex: 1,
        width: 130,
        backgroundColor: '#FF1F00',
        paddingVertical: 10,
        borderRadius: 8,
        marginLeft: 8,
        alignItems: 'center',
    },
    editText: {
        color: '#fff',
        fontFamily: 'Urbanist-Bold',
        fontSize: 12,
    },
    deleteText: {
        color: '#fff',
        fontFamily: 'Urbanist-Bold',
        fontSize: 12,
    },
});
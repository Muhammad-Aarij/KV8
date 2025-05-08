import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { dots } from '../assets/images';

export default function AssignmentTile({ state }) {
    const [showOptions, setShowOptions] = useState(false);

    return (
        <View style={styles.postCard}>
            <View style={styles.AssignmentHead}>
                <Text style={{ ...styles.postTitle, maxWidth: "78%" }}>
                    EC 203 - Principles of Macroeconomics
                </Text>

                {state === "Assignment" ? (
                    <TouchableOpacity onPress={() => setShowOptions(prev => !prev)}>
                        <Image style={styles.dots} source={dots} />
                    </TouchableOpacity>
                ) : (
                    <Text style={{ ...styles.postMeta, fontSize: 9 }}>Due on 25 July</Text>
                )}
            </View>

            <Text style={{ ...styles.postBody, marginTop: 0 }}>
                Lorem ipsum dolor sit amet consectetur. Pellentesque platea placerat bibendum maecenas.
            </Text>

            {/* Download Button */}
            {showOptions && (
                <TouchableOpacity style={styles.downloadBtn}>
                    <Text style={styles.downloadText}>Download</Text>
                </TouchableOpacity>
            )}
        </View>
    );
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
    AssignmentHead: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
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
    dots: {
        width: 24,
        height: 24,
        resizeMode: "contain",
    },
    postMeta: {
        fontFamily: "Urbanist-Medium",
        fontSize: 12,
        color: "#8C8C8C",
    },
    downloadBtn: {
        alignSelf: "flex-end",
        marginTop: 5,
        paddingVertical: 6,
        paddingHorizontal: 16,
        backgroundColor: "#000",
        borderRadius: 8,
    },
    downloadText: {
        color: "#fff",
        fontFamily: "Urbanist-Medium",
        fontSize: 13,
    },
});

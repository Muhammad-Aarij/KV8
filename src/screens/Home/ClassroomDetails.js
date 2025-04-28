import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import AssignmentTile from '../../components/AssignmentTile'
import NewsTile from '../../components/NewsTile'

export default function ClassroomDetails() {
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="Write something..."
                placeholderTextColor="#999"
                multiline
            />
            {"Assignments" === "Assignments" && (
                <View style={styles.postContainer}>
                    {[1].map((item, index) => (

                        <AssignmentTile key={index} />
                    ))}
                </View>
            )}
            {"News" === "News" && (
                <View style={styles.postContainer}>
                    {[1].map((item, index) => (

                        <NewsTile key={index} />
                    ))}
                </View>
            )}


        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        fontFamily: "Urbanist-Medium",
        backgroundColor: "#F8F8F8",
        borderWidth: 1,
        color: "black",
        borderColor: "#DBDBDB",
        borderRadius: 12,
        paddingHorizontal: 27,
        paddingVertical: 18,
        marginBottom: 15,
        fontSize: 14,
    },
})
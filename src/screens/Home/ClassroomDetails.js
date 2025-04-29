import React from 'react'
import { ScrollView, StyleSheet, TextInput, View } from 'react-native'
import AssignmentTile from '../../components/AssignmentTile'
import NewsTile from '../../components/NewsTile'
import ExamTile from '../../components/ExamTile'

export default function ClassroomDetails() {
    return (
        <ScrollView style={{ paddingBottom: 50, }} showsVerticalScrollIndicator={false}>
            <TextInput
                style={styles.input}
                placeholder="Write something..."
                placeholderTextColor="#999"
                multiline
            />
            {"Exam" === "Exam" && (
                <View style={styles.postContainer}>
                    {[1].map((item, index) => (

                        <ExamTile key={index} />
                    ))}
                </View>
            )}
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

                        <NewsTile user={"Andrew White"} title={"School’s roadmap – what’s coming soon"} body={"Meeting scheduled for next Monday. Please confirm attendance..."} time={"2 hours ago"} category={"Announcement"} />

                    ))}
                </View>
            )}



        </ScrollView>
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
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ClassroomCard from "../../components/ClassroomCard";
import ClassroomDetails from "./ClassroomDetails";

const classrooms = [
    { id: "1", title: "7th/The Learning Hub", attendance: 50, students: 55, teacher: "Andrew Ainsley", email: "Ainsley@21gmail.io" },
    { id: "2", title: "8th/Science Academy", attendance: 80, students: 48, teacher: "Jane Doe", email: "JaneDoe@school.edu" },
    { id: "3", title: "9th/Innovation Center", attendance: 78, students: 60, teacher: "John Smith", email: "JohnSmith@edu.org" },
];

export default function Classroom() {
    return (

        <View style={styles.container}>
            {false &&
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={classrooms}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <ClassroomCard {...item} />}
                    initialNumToRender={5} // Render only the first few items initially
                    windowSize={5} // Helps with memory usage
                    maxToRenderPerBatch={5} // Limits batch rendering
                    updateCellsBatchingPeriod={50} // Improves UI responsiveness
                    getItemLayout={(data, index) => ({ length: 120, offset: 120 * index, index })} // Improves scroll performance
                />}

            {true &&
                <ClassroomDetails />
            }

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
});


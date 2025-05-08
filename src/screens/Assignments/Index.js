import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import AssignmentTile from '../../components/AssignmentTile';
export default function Index() {
    return (
        <View style={styles.container}>
            <View style={styles.header} >
                <Text style={styles.title}>Assignments</Text>
            </View >
            <ScrollView showsVerticalScrollIndicator={false}>
                {[1, 2, 3, 4, 5].map((item, index) => (
                    <AssignmentTile key={index} state={"Assignment"} />
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 18
    },

    header: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        paddingTop: 10,
        marginBottom:25,
    },

    title: {
        fontSize: 20,
        fontFamily: "Urbanist-Bold",
        color: "black",
    },
});

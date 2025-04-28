import React, { useState } from 'react'
import { View, Text, ScrollView, TextInput, StyleSheet, TouchableOpacity, FlatList, Image } from "react-native";
import AssignmentTile from '../../components/AssignmentTile';
import NewsTile from '../../components/NewsTile';
export default function Community() {

    const [filter, setFilter] = useState("News");
    const filters = ["News", "Social Media", "Assignments", "Important"];
    const posts = [
        {
            id: "1",
            user: "Andrew White",
            time: "2 hours ago",
            category: "Announcement",
            title: "School’s roadmap – what’s coming soon",
            body: "Lorem ipsum dolor sit amet consectetur. Pellentesque platea placerat bibendum maecenas. Pharetra enim convallis tortor libero enim. Id proin ultrices in mattis a.Lorem ipsum dolor sit amet consectetur. Pellentesque platea placerat bibendum maecenas",
        },
        {
            id: "2",
            user: "Jane Doe",
            time: "4 hours ago",
            category: "Reminder",
            title: "Upcoming Parent-Teacher Meeting",
            body: "Meeting scheduled for next Monday. Please confirm attendance...",
        },
        {
            id: "23",
            user: "Jane Doe",
            time: "4 hours ago",
            category: "Reminder",
            title: "Upcoming Parent-Teacher Meeting",
            body: "Meeting scheduled for next Monday. Please confirm attendance...",
        },
        {
            id: "2322",
            user: "Jane Doe",
            time: "4 hours ago",
            category: "Reminder",
            title: "Upcoming Parent-Teacher Meeting",
            body: "Meeting scheduled for next Monday. Please confirm attendance...",
        },
    ];

    return (
        <>
            <TextInput style={styles.input} placeholder="Write something..." placeholderTextColor="#999" multiline />

            <View>
                {/* Filters */}
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterContainer}>
                    <View style={styles.filters}>
                        {filters.map((tag) => (
                            <TouchableOpacity key={tag} onPress={() => setFilter(tag)} style={[styles.filterBtn, filter === tag && styles.activefilterBtn]}>
                                <Text style={[styles.filterText, filter === tag && styles.activefilterText]}>{tag}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
            </View>

            {/* Posts - Using FlatList for efficiency */}
            {filter != "Assignments" &&
                <View style={styles.postContainer}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={posts}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <NewsTile user={item.user} title={item.title} body={item.body} time={item.time} category={item.category} />
                        )}
                    />
                </View>
            }


            {filter === "Assignments" && (
                <View style={styles.postContainer}>
                    {[1, 2, 3].map((item, index) => (

                        <AssignmentTile key={index} />
                    ))}
                </View>
            )}

        </>
    )
}


const styles = StyleSheet.create({
    filterContainer: {
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    tabButton: {
        height: 35,
        paddingVertical: 6,
        paddingHorizontal: 18,
        borderRadius: 23,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#838383",
        marginRight: 10,
    },
    activeTab: {
        backgroundColor: "#838383",
    },
    tabText: {
        fontFamily: "Urbanist-Medium",
        fontSize: 14,
        color: "#838383",
    },
    activeTabText: {
        fontFamily: "Urbanist-Bold",
        color: "#fff",
    },
    input: {
        marginHorizontal: 16,
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
    filters: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginBottom: 5,
        gap: 8,
    },
    filterBtn: {
        paddingHorizontal: 15,
        paddingVertical: 6,
        backgroundColor: "white",
        borderRadius: 16,
        borderWidth: 0.8,
        borderColor: "#A2A2A2",
    },
    activefilterBtn: {
        backgroundColor: "#838383",
    },
    filterText: {
        fontSize: 13,
        color: "#333",
    },
    activefilterText: {
        fontFamily: "Urbanist-Medium",
        color: "#fff",
    },
    postContainer: {
        flex: 1,
        paddingHorizontal: 20,
    },

});

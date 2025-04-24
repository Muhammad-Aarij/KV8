import React, { useState } from 'react'
import { View, Text, ScrollView, TextInput, StyleSheet, TouchableOpacity, FlatList, Image } from "react-native";
import user from "../../assets/user.png";
import dots from '../../assets/dot.png';
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
                            <View style={styles.postCard}>
                                <View style={styles.postHeader}>
                                    <View style={{ flexDirection: "row" }}>
                                        <Image style={styles.user} source={user} />
                                        <View>
                                            <Text style={styles.postUser}>{item.user}</Text>
                                            <Text style={styles.postMeta}>{item.time} · {item.category}</Text>
                                        </View>
                                    </View>
                                    <Image style={styles.dots} source={dots} />
                                </View>
                                <Text style={styles.postTitle}>{item.title}</Text>
                                <Text style={styles.postBody}>{item.body}</Text>
                            </View>
                        )}
                    />
                </View>
            }


            {filter === "Assignments" && (
                <View style={styles.postContainer}>
                    {[1, 2, 3].map((item, index) => (
                        <View key={index} style={styles.postCard}>
                            <View style={styles.AssignmentHead}>
                                <Text style={{ ...styles.postTitle, maxWidth: "78%" }}>
                                    EC 203 - Principles of Macroeconomics
                                </Text>
                                <Text style={{ ...styles.postMeta, fontSize: 9 }}>Due on 25 July</Text>
                            </View>
                            <Text style={{...styles.postBody,marginTop:0}}>
                                Lorem ipsum dolor sit amet consectetur. Pellentesque platea placerat bibendum maecenas.
                            </Text>
                        </View>
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


    AssignmentHead: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // paddingBottom: 12,
        marginBottom: 10,
        // borderBottomWidth: 1,
        // borderBottomColor: "#E4E4E4",
    },
});

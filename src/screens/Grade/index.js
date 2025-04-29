import React from 'react';
import NewsTile from '../../components/NewsTile';
import AssignmentTile from '../../components/AssignmentTile';
import ExamTile from '../../components/ExamTile';
import { ScrollView, View, StyleSheet } from 'react-native';
import Header from '../../components/Header';

export default function Index() {
    const sections = [
        { key: "Exam", component: <ExamTile /> },
        { key: "Assignments", component: <AssignmentTile /> },
        {
            key: "News",
            component: <NewsTile user="Andrew White" title="School’s roadmap – what’s coming soon"
                body="Meeting scheduled for next Monday. Please confirm attendance..." time="2 hours ago"
                category="Announcement" />,
        }
    ];

    return (
        <>
            <Header title="Grade 7" />
            <ScrollView style={styles.container}>
                {sections.map((section) => (
                    <View key={section.key} style={styles.postContainer}>
                        {section.component}
                    </View>
                ))}
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 20, paddingTop: 40 },
});

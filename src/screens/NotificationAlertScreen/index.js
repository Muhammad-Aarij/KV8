import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import Header from '../../components/Header';
import theme from '../../themes/theme';
import { Alert } from '../../assets/images';

const notifications = [
    { title: 'Students & Parents 🎉', time: 'Today | 15:36 PM', desc: 'Stay updated with real-time attendance, assignments, and announcements.', new: true },
    { title: 'Teachers', time: 'Yesterday | 09:23 AM', desc: 'Manage classes, schedules, and communicate effortlessly.', new: true },
    { title: 'Administrators', time: '19 Dec, 2022 | 18:35 PM', desc: 'Streamline school operations with powerful tools.', new: false },
    { title: 'Teachers', time: '14 Dec, 2022 | 10:52 AM', desc: 'Effortless attendance & grade tracking', new: false },
    { title: 'Administrators', time: '12 Dec, 2022 | 15:38 PM', desc: 'Seamless teacher-student communication', new: false },
];

const Index = () => {
    return (
        <>
            <Header title="Notifications" />
            <ScrollView style={styles.container}>
                {notifications.map((n, i) => (
                    <View key={i} style={styles.notificationCard}>
                        <View style={{ flexDirection: "row", position: "relative",marginBottom:10, }}>
                            <View style={styles.ImageContainer}>
                                <Image source={Alert} style={styles.img} />
                            </View>
                            <View style={styles.rowBetween}>
                                <Text style={styles.title}>{n.title}</Text>
                                <Text style={styles.time}>{n.time}</Text>
                            </View>
                            {n.new &&
                                <View style={styles.badge}>
                                    <Text style={styles.badgeText}>New</Text>
                                </View>}
                        </View>
                        <Text style={styles.desc}>{n.desc}</Text>
                    </View>
                ))}
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 20, paddingTop: 40 },
    notificationCard: { paddingBottom: 12, marginBottom: 17 },
    rowBetween: { flexDirection: 'column', },
    title: { fontFamily: "Urbanist-Bold", fontSize: 15, color: '#000000', marginBottom: 5 },
    badge: { backgroundColor: theme.colors.blue, paddingHorizontal: 12, paddingVertical: 5.5, borderRadius: 5,position:"absolute",top:0, right: 4 },
    badgeText: { fontFamily: "Urbanist-SemiBold", color: '#fff', fontSize: 11, letterSpacing: 0.5 },
    time: { fontSize: 12, color: '#000000', fontFamily: "Urbanist-Medium", letterSpacing: 0.18, },
    desc: { fontSize: 13, color: '#000000', fontFamily: "Urbanist-Regular", letterSpacing: 0.18, lineHeight: 20 },
    img: { width: 24, height: 24, },
    ImageContainer: { padding: 15, borderRadius: 100, backgroundColor: "#00000014", justifyContent: 'center', alignItems: 'center', marginRight: 10, },
});

export default Index;
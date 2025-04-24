import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import Header from '../../components/Header';

const examScheduleData = {
    '2024-01-02': [{ subject: 'Mathematics', time: '10:00 - 11:00' }],
    '2024-01-04': [{ subject: 'English', time: '10:00 - 11:00' }],
    '2024-01-07': [{ subject: 'Science', time: '10:00 - 11:00' }],
    '2024-01-12': [{ subject: 'Science', time: '10:00 - 11:00' }],
    '2024-01-22': [{ subject: 'Science', time: '10:00 - 11:00' }],
};

const getDaysInMonth = (month, year) => {
    const date = new Date(year, month, 1);
    const days = [];
    while (date.getMonth() === month) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }
    return days;
};

const dayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

const CalendarScreen = () => {
    const [selectedDate, setSelectedDate] = useState('2024-01-02');
    const [currentMonth, setCurrentMonth] = useState(0); // January
    const [currentYear, setCurrentYear] = useState(2024);
    const [days, setDays] = useState([]);

    useEffect(() => {
        setDays(getDaysInMonth(currentMonth, currentYear));
    }, [currentMonth, currentYear]);

    const formatDate = (date) => date.toISOString().split('T')[0];

    return (
        <>
            <Header title={"Exam Schedule"} />
            <SafeAreaView style={styles.container}>
                {/* Month Navigation */}
                <View style={styles.calender}>
                    <Text style={styles.monthText}>
                        {new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} {currentYear}
                    </Text>

                    {/* Days Header */}
                    <View style={styles.daysHeader}>
                        {dayNames.map((day) => (
                            <Text key={day} style={styles.dayName}>{day}</Text>
                        ))}
                    </View>

                    {/* Calendar Days */}
                    <View style={styles.daysContainer}>
                        {days.map((day, index) => {
                            const dateStr = formatDate(day);
                            const isSelected = selectedDate === dateStr;
                            const hasExam = examScheduleData[dateStr];

                            return (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => setSelectedDate(dateStr)}
                                    style={[
                                        styles.dayBox,
                                        hasExam && styles.examHighlight
                                    ]}
                                >
                                    <Text style={[styles.dayText, hasExam && { color: "#ffffff" }]}>
                                        {day.getDate()}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </View>

                {/* All Exam Schedules */}
                <FlatList
                    data={Object.entries(examScheduleData)}
                    keyExtractor={(item) => item[0]}
                    renderItem={({ item }) => (
                        <View style={styles.examCard}>

                            <View style={{ width: "10%", }}>
                                <Text style={styles.examDateNumber}>2</Text>
                            </View>
                            <View style={{ flexDirection: "row", gap: 10, }}>
                                <View style={{ width: "10%", }}>
                                    <Text style={{ ...styles.examDateNumber, fontSize: 14, fontFamily: "Urbanist-SemiBold" }}>Wed</Text>
                                    <Text style={{ ...styles.examTime }}>10:00</Text>
                                </View>
                                {item[1].map((exam, index) => (
                                    <View key={index} style={styles.examDetails}>
                                        <Text style={styles.subject}>{exam.subject}</Text>
                                        <Text style={styles.time}>{exam.time}</Text>
                                    </View>
                                ))}
                            </View>
                        </View>
                    )}
                    contentContainerStyle={styles.examList}
                />
            </SafeAreaView >
        </>
    );
};

export default CalendarScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 30,
        paddingHorizontal: 20,
    },
    monthRow: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    monthText: {
        fontSize: 16,
        paddingBottom: 20,
        marginBottom: 18,
        borderBottomWidth: 1,
        borderBottomColor: "#000",
        fontFamily: "Urbanist-Bold",
        textAlign: "center",
    },
    daysHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    dayName: {
        width: '14.28%',
        textAlign: 'center',
        fontFamily: "Urbanist-Medium",
        fontSize: 16,
        color: "#333",
    },
    calender: {
        borderWidth: 2,
        borderColor: '#A1A1A1',
        padding: 20,
        borderRadius: 16,
        marginBottom: 20,

    },
    daysContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        // marginBottom: 20,
    },
    dayBox: {
        width: '14.28%',
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 100,
        marginBottom: 5,
    },
    dayText: {
        color: '#000',
        fontSize: 16,
        fontFamily: "Urbanist-Medium",

    },
    selectedDay: {
        backgroundColor: '#000',
    },
    selectedDayText: {
        color: '#fff',
    },
    examHighlight: {
        backgroundColor: "#000000", // Yellow highlight for exam days

    },
    scheduleTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    examList: {
        paddingBottom: 20,
    },
    examCard: {
        backgroundColor: '#ffffff',
        padding: 12,
        borderWidth: 1,
        borderColor: "#9F9F9F",
        borderRadius: 10,
        marginBottom: 10,
    },
    examDate: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    examDetails: {
        backgroundColor: "#838383",
        width: "88%",
        borderRadius: 10,
        padding: 13,
    },
    subject: {
        fontSize: 14,
        fontFamily: "Urbanist-SemiBold",
        color: '#ffffff',
    },
    time: {
        fontFamily: "Urbanist-Medium",
        fontSize: 12,
        color: '#ffffff',
    },
    examDateNumber: {
        fontFamily: "Urbanist-Bold",
        color: "#000",
        fontSize: 24,
        textAlign: "center",
        // width: "10%",
    },
    examTime: {
        fontFamily: "Urbanist-SemiBold",
        color: "#000",
        fontSize: 12,
        // textAlign:"center",
        // width: "10%",
    },
});

import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, SafeAreaView, Image } from 'react-native';

export default function DateSlider() {

    const [selectedDateIndex, setSelectedDateIndex] = useState(2);
    const [currentIndex, setCurrentIndex] = useState(0);

    const generateDates = (month, year) => {
        const date = new Date(year, month, 1);
        const datesArray = [];

        while (date.getMonth() === month) {
            datesArray.push({ day: date.toLocaleString("default", { weekday: "short" }), date: date.getDate() });
            date.setDate(date.getDate() + 1);
        }

        return datesArray;
    };

    const dates = generateDates(1, 2024); // February (Month Index 1)

    const handleSelectDate = (index) => {
        const newIndex = Math.max(0, index - 2); // Move the selected date to the center
        setCurrentIndex(newIndex);
        setSelectedDateIndex(index);
    };


    return (
        <View style={styles.dateRow}>
            {dates.slice(currentIndex, currentIndex + 5).map((item, index) => {
                const actualIndex = currentIndex + index;
                return (
                    <TouchableOpacity
                        key={index}
                        style={[styles.dateBox, actualIndex === selectedDateIndex && styles.selectedDateBox]}
                        onPress={() => handleSelectDate(actualIndex)}
                    >
                        <View style={[styles.tag, actualIndex === selectedDateIndex && styles.selectedTag]} />
                        <Text style={[styles.dateNumber, actualIndex === selectedDateIndex && styles.selectedDateNumber]}>
                            {item.date}
                        </Text>
                        <Text style={[styles.dateDay, actualIndex === selectedDateIndex && styles.selectedDateDay]}>
                            {item.day}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    )
}

const styles = StyleSheet.create({

    dateRow: { flexDirection: 'row', gap: 12, justifyContent: 'center', alignItems: "center", marginBottom: 20 },
    dateBox: { alignItems: 'center', borderRadius: 10, backgroundColor: '#F9F9F9', width: "17%", overflow: "hidden", elevation: 1 },
    selectedDateBox: { backgroundColor: '#ffffff', borderRadius: 15, width: "22%", elevation: 3 },
    tag: { width: "100%", height: 20, backgroundColor: '#5F33E142' },
    selectedTag: { width: "100%", height: 30, backgroundColor: '#5F33E1' },
    dateNumber: { fontSize: 20, fontFamily: "Urbanist-SemiBold", marginTop: 7 },
    dateDay: { fontSize: 14, fontFamily: "Urbanist-Medium", marginBottom: 10 },
    selectedDateNumber: { color: '#000000', fontSize: 25, fontFamily: "Urbanist-Bold", marginTop: 10 },
    selectedDateDay: { color: '#000000', fontSize: 18, fontFamily: "Urbanist-Medium", marginBottom: 13 },

    // timelineContainer: { paddingBottom: 40 },
})

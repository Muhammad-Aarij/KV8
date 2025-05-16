import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { dollar, leftBlue, rightBlue } from '../../assets/images';
import FinanceStudentCard from '../../components/FInanceStudentCard';

const width = Dimensions.get('window').width;

const students = [
    { name: 'Andrew Ainsley', grade: 'Grade 1', status: 'Paid' },
    { name: 'Andrew Ainsley', grade: 'Grade 1', status: 'Pending' },
    { name: 'Andrew Ainsley', grade: 'Grade 1', status: 'Pending' },
    { name: 'Andrew Ainsley', grade: 'Grade 1', status: 'Paid' },
    { name: 'Andrew Ainsley', grade: 'Grade 1', status: 'Pending' },
];

const FinanceDashboard = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Finance</Text>
            
            {/* Revenue Box */}
            <View style={styles.revenueBox}>
                <View style={styles.revenueRow}>
                    <Image source={dollar} style={styles.icon} />
                    <Text style={styles.revenueTitle}>$9460.00</Text>
                </View>
                <Text style={styles.revenueText}>Total Revenue</Text>
            </View>

            {/* Student Statistics */}
            <Text style={styles.sectionTitle}>Student Statistic</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <BarChart
                    data={{
                        labels: ['Class A', 'Class B', 'Class C', 'Class D', 'Class E', 'Class F'],
                        datasets: [{ data: [20, 40, 15, 30, 60, 90], color: () => '#000' }],
                    }}
                    width={width}
                    height={240}
                    withInnerLines={false}
                    chartConfig={chartConfig}
                    style={styles.chartStyle}
                />
            </ScrollView>

            {/* Students Fee Section */}
            <View style={styles.studentsFeeHeader}>
                <Text style={styles.sectionTitle}>Students Fee</Text>
                <View style={styles.dateSelector}>
                    <TouchableOpacity>
                        <Image source={leftBlue} style={styles.arrowIcon} />
                    </TouchableOpacity>
                    <Text style={styles.dateText}>Sept 2024</Text>
                    <TouchableOpacity>
                        <Image source={rightBlue} style={styles.arrowIcon} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Students List */}
            <FlatList
                data={students}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <FinanceStudentCard {...item} />}
            />
            <View style={{ height: 50 }} />
        </ScrollView>
    );
};

export default FinanceDashboard;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
        flex: 1,
        paddingBottom: 50,
    },
    title: {
        fontFamily: "Urbanist-Bold",
        fontSize: 20,
        marginVertical: 15,
        textAlign: "center",
        color: "#474747",
    },
    revenueBox: {
        backgroundColor: '#F0FAFF',
        padding: 25,
        borderRadius: 5,
        alignItems: 'center',
    },
    revenueRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    icon: {
        width: 34,
        height: 34,
        resizeMode: "contain",
        marginRight: 10,
    },
    revenueTitle: {
        fontSize: 28,
        fontFamily: 'Urbanist-Bold',
        color: '#000',
    },
    revenueText: {
        fontFamily: "Urbanist-SemiBold",
        fontSize: 16,
        marginTop: 10,
    },
    sectionTitle: {
        fontSize: 16,
        fontFamily: 'Urbanist-Bold',
        marginVertical: 25,
    },
    chartStyle: {
        borderRadius: 5,
        elevation: 4,
        margin: 3,
    },
    studentsFeeHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
    },
    dateSelector: {
        flexDirection: "row",
        alignItems: "center",
    },
    arrowIcon: {
        width: 30,
        height: 30,
        resizeMode: "contain",
    },
    dateText: {
        color: "#2E3A59",
        marginHorizontal: 5,
        fontFamily: "Urbanist-Bold",
        fontSize: 13,
    },
});

const chartConfig = {
    backgroundColor: '#fff',
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    color: () => '#000',
    labelColor: () => '#000',
    barPercentage: 1,
};

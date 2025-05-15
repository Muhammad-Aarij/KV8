// screens/FinanceDashboard.js
import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, ScrollView, Pressable, TouchableOpacity } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { dollar, graph, leftBlue, rightBlue } from '../../assets/images';
import FinanceStudentCard from '../../components/FInanceStudentCard';

const data = {
    labels: ['Class A', 'Class B', 'Class C', 'Class D', 'Class E', , 'Class F'],
    datasets: [{ data: [20, 40, 15, 30, 60, 90] }],
};

const width = Dimensions.get('window').width;

const students = [
    { name: 'Andrew Ainsley', grade: 'Grade 1', status: 'Paid' },
    { name: 'Andrew Ainsley', grade: 'Grade 1', status: 'Pending' },
    { name: 'Andrew Ainsley', grade: 'Grade 1', status: 'Pending' },
    { name: 'Andrew Ainsley', grade: 'Grade 1', status: 'Paid' },
    { name: 'Andrew Ainsley', grade: 'Grade 1', status: 'Pending' },
    { name: 'Andrew Ainsley', grade: 'Grade 1', status: 'Pending' },
    { name: 'Andrew Ainsley', grade: 'Grade 1', status: 'Paid' },
    { name: 'Andrew Ainsley', grade: 'Grade 1', status: 'Pending' },
    { name: 'Andrew Ainsley', grade: 'Grade 1', status: 'Pending' },
];

const FinanceDashboard = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.Title}>Finance</Text>
            <View style={styles.revenueBox}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image source={dollar} style={{ width: 34, height: 34, objectFit: "contain", marginRight: 10, }} />
                    <Text style={styles.revenueTitle}>$9460.00</Text>
                </View>
                <Text style={{ fontFamily: "Urbanist-SemiBold", fontSize: 16, marginTop: 10 }}>Total Revenue</Text>
            </View>

            <Text style={styles.sectionTitle}>Student Statistic</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <BarChart
                    data={{
                        labels: ['Class A', 'Class B', 'Class C', 'Class D', 'Class E', 'Class F'],
                        datasets: [{
                            data: [20, 40, 15, 30, 60, 90],
                            color: () => '#000' // <-- Bar color set to black
                        }],
                    }}
                    width={width} // wider to enable scroll
                    height={240}
                    withInnerLines={false}
                    yAxisLabel=""
                    chartConfig={{
                        backgroundColor: '#fff',
                        backgroundGradientFrom: '#fff',
                        backgroundGradientTo: '#fff',
                        color: () => `#000`,         // axis and label color
                        labelColor: () => '#000',
                        barPercentage: 1,
                        // barColor:"#000",
                    }}
                    style={{ borderRadius: 5, elevation: 4, margin: 3 }}
                />
            </ScrollView>
            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 10 }}>
                <Text style={styles.sectionTitle}>Students Fee</Text>
                <View style={{ flexDirection: "row", alignItems: "center", }}>
                    <TouchableOpacity>
                        <Image source={leftBlue} style={{ width: 30, height: 30, resizeMode: "contain" }} />
                    </TouchableOpacity>
                    <Text style={{ color: "#2E3A59", marginHorizontal: 5, fontFamily: "Urbanist-Bold", fontSize: 13 }}>Sept 2024</Text>
                    <TouchableOpacity>
                        <Image source={rightBlue} style={{ width: 30, height: 30, resizeMode: "contain" }} />
                    </TouchableOpacity>
                </View>
            </View>
            <FlatList
                data={students}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <FinanceStudentCard name={item.name} grade={item.grade} status={item.status} />

                )}
            />
            <View style={{ height: 50 }} />
        </ScrollView>
    );
};

export default FinanceDashboard;

const styles = StyleSheet.create({
    container: { padding: 20, backgroundColor: '#fff', flex: 1, paddingBottom: 50, },
    revenueBox: { backgroundColor: '#F0FAFF', padding: 25, borderRadius: 5, alignItems: 'center', },
    revenueTitle: { fontSize: 28, fontFamily: 'Urbanist-Bold', color: '#000', },
    sectionTitle: { fontSize: 16, fontFamily: 'Urbanist-Bold', marginVertical: 25 },
    studentRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10 },
    status: { fontWeight: 'bold' },
    Title: { fontFamily: "Urbanist-Bold", fontSize: 20, marginVertical: 15, textAlign: "center", color: "#474747" },
});

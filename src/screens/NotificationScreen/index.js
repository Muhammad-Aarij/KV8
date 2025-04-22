import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import Header from '../../components/Header';

const Index = () => {
    const [general, setGeneral] = useState(true);
    const [sound, setSound] = useState(true);

    return (
        <>
            <Header title={"Notification"} />
            <View style={styles.container}>
                {/* <Text style={styles.header}>Notification</Text> */}
                <View style={styles.row}>
                    <Text style={styles.label}>General Notification</Text>
                    <Switch trackColor={{ false: '#E5E4E2', true: '#E5E4E2' }}
                        thumbColor={general ? '#000000' : '#C0C0C0'} value={general} onValueChange={setGeneral} />
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Sound</Text>
                    <Switch trackColor={{ false: '#E5E4E2', true: '#E5E4E2' }}
                        thumbColor={sound ? '#000000' : '#C0C0C0'} value={sound} onValueChange={setSound} />
                </View>
            </View>
        </>
    );
};

export default Index;

const styles = StyleSheet.create({
    container: { padding: 28, paddingTop: 40, backgroundColor: '#fff', flex: 1 },
    header: { fontSize: 20, fontWeight: '600', marginBottom: 20 },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        alignItems: 'center',
    },
    label: {
        fontSize: 16,
        color: "#212121",
        fontFamily: "Urbanist-SemiBold",

    },
});

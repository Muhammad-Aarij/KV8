import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
    institute, teacherBlack, classWhite, classGreen,
    studentWhite, studentBlue, teacherWhite, notice
} from '../../assets/images';

const ActionCard = ({ title, icon, backgroundColor, navigateTo, textColor = "white", borderColor = "transparent" }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity 
            style={[styles.card, { backgroundColor, borderColor: borderColor ? borderColor : backgroundColor }]} 
            onPress={() => navigation.navigate(navigateTo)}
        >
            <Image source={icon} style={[styles.icon, { tintColor: textColor }]} />
            <Text style={[styles.cardText, { color: textColor }]}>{title}</Text>
        </TouchableOpacity>
    );
};

const AddAction = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Add Action</Text>

            <View style={styles.grid}>
                <ActionCard title="Add New Teacher" icon={teacherWhite} backgroundColor="#000" navigateTo="AddTeacher" />
                <ActionCard title="View Teacher List" icon={teacherBlack} backgroundColor="#4E74F938" textColor="black" borderColor="#000" navigateTo="TeacherList" />

                <ActionCard title="Add New Student" icon={studentWhite} backgroundColor="#4E98F9" navigateTo="AddStudent" />
                <ActionCard title="View Student List" icon={studentBlue} backgroundColor="#E5F8FF" textColor="#4E98F9" borderColor="#4E98F9" navigateTo="StudentList" />

                <ActionCard title="Add New Class" icon={classWhite} backgroundColor="#A3D139" navigateTo="AddClass" />
                <ActionCard title="View Classes List" icon={classGreen} backgroundColor="#E5F8D8" textColor="#A3D139" borderColor="#A3D139" navigateTo="ClassList" />

                <ActionCard title="Edit Institute Profile" icon={institute} backgroundColor="#814EF9" navigateTo="InstituteProfile" />
                <ActionCard title="Add Important Notices" icon={notice} backgroundColor="#FF8B7B" navigateTo="AddNotice" />
            </View>
        </ScrollView>
    );
};

export default AddAction;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        fontFamily: 'Urbanist-Bold',
        color: '#000',
        marginVertical: 15,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    card: {
        borderWidth: 1,
        width: '48%',
        aspectRatio: 1,
        borderRadius: 14,
        marginVertical: 7,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 50,
        height: 50,
        marginBottom: 10,
        resizeMode: 'contain',
    },
    cardText: {
        marginTop: 5,
        fontSize: 14,
        fontFamily: 'Urbanist-Bold',
        textAlign: 'center',
    },
});

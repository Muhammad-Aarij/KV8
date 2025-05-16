import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { User, User1 } from '../../assets/images';
import Header from '../../components/Header';

const StudentProfile = ({ navigation }) => {
    const [editable, setEditable] = useState(false);
    const [studentData, setStudentData] = useState({
        "Student Name": "Chris Jordan",
        "Date of Birth": "10 Oct 1996",
        "Blood Group": "B+",
        "Emergency Contact": "+919812345678",
        "Father's Name": "Alex Hales",
        "Mother's Name": "Maria",
    });

    const handleEdit = () => {
        setEditable(!editable);
    };

    return (
        <>
            {/* <Header title={"Forget Password"} /> */}
            <ScrollView contentContainerStyle={styles.container}>
                <View style={{ width: '100%', justifyContent: "center", alignItems: "center", }} >
                    {/* <Text style={styles.header}>Student Profile</Text> */}
                    <Image source={User} style={styles.avatar} />
                    <Text style={styles.name}>Chris Jordon</Text>
                    <Text style={styles.subText}>Class VII B</Text>

                    {/* Details Section */}
                    <View style={styles.detailBox}>
                        {Object.entries(studentData).map(([key, value], i) => (
                            <View key={i} style={styles.detailRow}>
                                <Text style={styles.label}>{key.replace(/([A-Z])/g, ' $1')}</Text>
                                <TextInput
                                    style={[styles.inputField, editable && styles.inputActive]}
                                    value={value}
                                    editable={editable}
                                    onChangeText={(text) => setStudentData({ ...studentData, [key]: text })}
                                />
                            </View>
                        ))}
                    </View>
                </View>

                <View style={{ width: '100%', alignItems: 'center' }}>
                    {/* Action Buttons */}
                    <TouchableOpacity style={styles.deleteBtn}><Text style={styles.deleteText}>Delete</Text></TouchableOpacity>
                    <TouchableOpacity style={[styles.editBtn, editable && styles.saveBtn]} onPress={handleEdit}>
                        <Text style={styles.editText}>{editable ? "Save" : "Edit"}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    );
};

export default StudentProfile;

const styles = StyleSheet.create({
    container: { minHeight:"100%", padding: 20, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'space-between' },
    header: { fontSize: 22, fontWeight: "bold", marginBottom: 15 },
    avatar: { width: 120, height: 120, borderRadius: 60, marginBottom: 14, resizeMode: "cover" },
    name: { fontSize: 20, fontFamily: 'Urbanist-Bold', color: "#2E3A59" },
    subText: { color: '#000', fontSize: 14, marginBottom: 30, marginTop: 5, fontFamily: 'Urbanist-Bold' },
    detailBox: { width: '100%', marginTop: 10 },
    detailRow: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", marginVertical: 8, borderBottomWidth: 1,
        borderBottomColor: '#E8EAEC', paddingBottom: 9,
    },
    label: { fontFamily: 'Urbanist-Bold', color: '#555', fontSize: 15 },
    inputField: {
        color: '#222',
        fontFamily: 'Urbanist-Medium',
        paddingVertical: 5,
        width: "50%",
        fontSize: 15,
    },
    inputActive: { borderBottomColor: "#007AFF" }, // Highlight when editable
    deleteBtn: { backgroundColor: 'red', padding: 18, borderRadius: 30, width: '90%', alignItems: 'center', marginTop: 20 },
    deleteText: { fontFamily: "Urbanist-Bold", fontSize: 10, color: 'white', fontWeight: 'bold', fontSize: 16 },
    editBtn: { fontFamily: "Urbanist-Bold", fontSize: 16, backgroundColor: '#aaa', padding: 18, borderRadius: 30, width: '90%', alignItems: 'center', marginTop: 10 },
    saveBtn: { backgroundColor: "#007AFF" }, // Change color when in "Save" mode
    editText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
});

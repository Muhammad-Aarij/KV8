import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import Header from '../../components/Header';
import { gallery } from '../../assets/images';

const AddStudent = () => {
    const [formData, setFormData] = useState({
        "Student Name": '',
        "Surname": '',
        "Registration Date": '',
        "Select Class": '',
        "Picture (Optional)": '',
        "Date Of Birth": '',
        "Student Birth Form ID / NIC": '',
        "Gender": '',
        "Any Identity Mark?": '',
        "Religion": '',
        "Blood Group": '',
        "Address": '',

        "Father Name": '',
        "Surename": '',
        "Father National ID": '',
        "Occupation": '',
        "Mobile No": '',
        "Email Address": '',

        "Mother Name": '',
        "Surname": '',
        "Mother National ID": '',
        "Occupation": '',
        "Mobile No": '',
        "Email": '',
    });

    const handleChange = (key, value) => {
        setFormData(prev => ({ ...prev, [key]: value }));
    };

    return (
        <>
            <Header title="Add New Student" />
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={{ ...styles.label, fontSize: 18, fontFamily: "Urbanist-Bold", textAlign: "left", width: "100%", marginTop: 20,marginBottom:10 }}>Basic Information</Text>

                <Input label="Student Name" value={formData.name} onChange={val => handleChange('name', val)} />
                <Input label="Surname" value={formData.description} multiline onChange={val => handleChange('description', val)} />
                <Input label="Registration Date" value={formData.subject} onChange={val => handleChange('subject', val)} />
                <Input label="Select Class" value={formData.class} onChange={val => handleChange('class', val)} />
                <Text style={{ ...styles.label, textAlign: "left", width: "100%" }}>Picture (Optional)</Text>
                <View style={styles.attachmentBox}>
                    <Image source={gallery} style={{ width: 30, height: 30, objectFit: "contain" }} />
                    <Text style={styles.attachmentText}>Upload Image</Text>
                </View>
                {/* Other Information */}
                <Text style={{ ...styles.label, fontSize: 18, fontFamily: "Urbanist-Bold", textAlign: "left", width: "100%",marginBottom:10 }}>Other Information</Text>
                <Input label="Date Of Birth" value={formData.class} onChange={val => handleChange('class', val)} />
                <Input label="Student Birth Form ID / NIC" value={formData.class} onChange={val => handleChange('class', val)} />
                <Input label="Gender" value={formData.class} onChange={val => handleChange('class', val)} />
                <Input label="Any Identity Mark?" value={formData.class} onChange={val => handleChange('class', val)} />
                <Input label="Religion" value={formData.class} onChange={val => handleChange('class', val)} />
                <Input label="Blood Group" value={formData.class} onChange={val => handleChange('class', val)} />
                <Input label="Address" value={formData.class} onChange={val => handleChange('class', val)} />
                {/* Father Information */}
                <Text style={{ ...styles.label, fontSize: 18, fontFamily: "Urbanist-Bold", textAlign: "left", width: "100%",marginBottom:10 }}>Father/Guardian Information</Text>
                <Input label="Father Name" value={formData.class} onChange={val => handleChange('class', val)} />
                <Input label="Surname" value={formData.class} onChange={val => handleChange('class', val)} />
                <Input label="Father National ID" value={formData.class} onChange={val => handleChange('class', val)} />
                <Input label="Occupation" value={formData.class} onChange={val => handleChange('class', val)} />
                <Input label="Mobile No" value={formData.class} onChange={val => handleChange('class', val)} />
                <Input label="Email Address" value={formData.class} onChange={val => handleChange('class', val)} />
                {/* Mothxer Information */}
                <Text style={{ ...styles.label, fontSize: 18, fontFamily: "Urbanist-Bold", textAlign: "left", width: "100%",marginBottom:10 }}>Mother Information</Text>
                <Input label="Mother Name" value={formData.class} onChange={val => handleChange('class', val)} />
                <Input label="Surname" value={formData.class} onChange={val => handleChange('class', val)} />
                <Input label="Mother National ID" value={formData.class} onChange={val => handleChange('class', val)} />
                <Input label="Occupation" value={formData.class} onChange={val => handleChange('class', val)} />
                <Input label="Mobile No" value={formData.class} onChange={val => handleChange('class', val)} />
                <Input label="Email Address" value={formData.class} onChange={val => handleChange('class', val)} />


                <TouchableOpacity style={styles.submitBtn}>
                    <Text style={styles.submitText}>Submit</Text>
                </TouchableOpacity>
            </ScrollView>
        </>
    );
};

const Input = ({ label, value, onChange, multiline = false, style }) => (
    <View style={[styles.inputGroup, style]}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
            style={[styles.inputField, multiline && styles.textArea]}
            value={value}
            onChangeText={onChange}
            multiline={multiline}
        />
    </View>
);

export default AddStudent;


const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 20,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    halfInput: {
        width: '48%',
    },
    label: {
        fontFamily: 'Urbanist-SemiBold',
        fontSize: 14,
        color: '#2E3A59',
        marginBottom: 9,
    },
    inputGroup: {
        width: '100%',
        marginBottom: 15,
    },
    inputField: {
        fontFamily: 'Urbanist-Medium',
        fontSize: 14,
        backgroundColor: '#F8F8F8',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#DBDBDB',
        padding: 14,
        color: '#000',
    },
    textArea: {
        minHeight: 80,
        textAlignVertical: 'top',
    },
    attachmentBox: {
        width: '100%',
        backgroundColor: '#FFF',
        borderStyle: 'dashed',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 10,
        padding: 20,
        paddingVertical: 35,
        gap:5,
        alignItems: 'center',
        marginBottom: 20,
    },
    attachmentText: {
        fontFamily: 'Urbanist-SemiBold',
        fontSize: 14,
        color: '#555',
    },
    submitBtn: {
        backgroundColor: '#838383',
        paddingVertical: 18,
        borderRadius: 30,
        width: '100%',
        alignItems: 'center',
        // marginTop: 20,
    },
    submitText: {
        color: 'white',
        fontFamily: 'Urbanist-Bold',
        fontSize: 16,
    },
});

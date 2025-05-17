import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import Header from '../../components/Header';
import { pin } from '../../assets/images';

const AddEvent = () => {
    const [noticeData, setNoticeData] = useState({
        title: '',
        description: '',
        category: '',
        pinned: '',
        messageTo: '',
        dueDate: '',
        dueTime: '',
    });

    const handleChange = (key, value) => {
        setNoticeData(prev => ({ ...prev, [key]: value }));
    };

    return (
        <>
            <Header title="Add Event" />
            <ScrollView contentContainerStyle={styles.container}>
                <Input label="Name of event" value={noticeData.title} onChange={val => handleChange('title', val)} />
                <Input label="Description" value={noticeData.description} multiline onChange={val => handleChange('description', val)} />
                <Input label="Class" value={noticeData.category} onChange={val => handleChange('category', val)} />

                <View style={styles.row}>
                    <Input label="Due Date" value={noticeData.dueDate} style={styles.halfInput} onChange={val => handleChange('dueDate', val)} />
                    <Input label="Due Time" value={noticeData.dueTime} style={styles.halfInput} onChange={val => handleChange('dueTime', val)} />
                </View>

                <Text style={{ ...styles.label, textAlign: "left", width: "100%" }}>Attachments</Text>
                <View style={styles.attachmentBox}>
                    <Image source={pin} style={{ width: 30, height: 30, objectFit: "contain" }} />
                    <Text style={styles.attachmentText}>Upload PDFs, images, or documents</Text>
                </View>

                <TouchableOpacity style={styles.submitBtn} onPress={() => console.log('Notice Posted:', noticeData)}>
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
            placeholder={`Enter ${label.toLowerCase()}...`}
            placeholderTextColor="#7A7A7A"
        />
    </View>
);

export default AddEvent;

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        padding: 20,
        paddingTop:30,
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
        gap: 5,
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

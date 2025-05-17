import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { schoolLogo } from '../../assets/images';
import Header from '../../components/Header';

const InstituteProfile = () => {
    const [editable, setEditable] = useState(false);
    const [instituteData, setInstituteData] = useState({
        "Name of Institute": 'Greenwood International School',
        "Target Line": 'Empowering Minds. Shaping Futures',
        "Phone Number": '+1 123-456-7890',
        "Institute Email": 'Greenwood123@gmail.com',
        "Website": 'www.GreenwoodSchool.com',
        "Address": '123 Main Street, Los Angeles, CA 90001, USA',
    });

    const handleEdit = () => {
        setEditable(!editable);
    };

    return (
        <>
        <Header title="Institute Profile" />
            <ScrollView contentContainerStyle={styles.container}>
                {/* Logo */}
                <View style={styles.logoContainer}>
                    <Image source={schoolLogo} style={styles.logo} />
                </View>

                {/* Input Fields */}
                <View style={styles.formContainer}>
                    {Object.entries(instituteData).map(([key, value], i) => (
                        <View key={i} style={styles.inputGroup}>
                            <Text style={styles.label}>{key.replace(/([A-Z])/g, ' $1')}</Text>
                            <TextInput
                                style={[styles.inputField, editable && styles.inputActive]}
                                value={value}
                                editable={editable}
                                onChangeText={(text) => setInstituteData({ ...instituteData, [key]: text })}
                            />
                        </View>
                    ))}
                </View>

                {/* Edit Button */}
                <TouchableOpacity style={[styles.editBtn, editable && styles.saveBtn]} onPress={handleEdit}>
                    <Text style={styles.editText}>{editable ? 'Save' : 'Edit'}</Text>
                </TouchableOpacity>
            </ScrollView>
        </>
    );
};

export default InstituteProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFFFFF',
        // alignItems: 'center',
    },
    logoContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        padding: 20,
        borderStyle: "dashed",
        borderColor: "#000000",
        borderWidth: 1,
        width: "100%",
        marginBottom: 20,
        // elevation: 4, // Adds subtle shadow effect
    },
    logo: {
        width: 130,
        height: 130,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    formContainer: {
        width: '100%',
        // backgroundColor: '#FFFFFF',
        // borderRadius: 10,
        // padding: 15,
        // marginTop: 20,
        // elevation: 3, // Subtle shadow effect
    },
    inputGroup: {
        // marginBottom: 12,
    },
    label: {
        fontFamily: 'Urbanist-SemiBold',
        fontSize: 14,
        color: '#000',
        marginBottom: 9,
    },
    inputField: {
        fontFamily: 'Urbanist-Medium',
        fontSize: 14,
        backgroundColor: '#F8F8F8',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#DBDBDB',
        padding: 14,
        fontSize: 16,
        color: '#000',
        marginBottom: 13,
    },
    inputActive: {
        // padding: 14,
        backgroundColor: '#E8F0FE', // Highlight when editable
    },
    editBtn: {
        backgroundColor: '#aaa',
        padding: 15,
        borderRadius: 30,
        width: '90%',
        alignItems: 'center',
        marginTop: 30,
    },
    saveBtn: {
        backgroundColor: "#007AFF", // Change color when in "Save" mode
    },
    editText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

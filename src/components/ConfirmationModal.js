import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { deleteRed, Logoutblack } from '../assets/images'; 

const ConfirmationModal = ({ visible, onClose, onConfirm, title, theme }) => {
    const themeColor = theme === 'red' ? "#E31D1C" : "#000000";

    return (
        <Modal visible={visible} animationType="slide" transparent onRequestClose={onClose}>
            <View style={styles.overlay}>
                <View style={styles.modalContent}>
                    {/* Modal Header */}
                    <View style={{ ...styles.header, borderBottomColor: themeColor }}>
                        <Image style={{ width: 25, height: 25, resizeMode: "contain" }} source={theme == "red" ? deleteRed : Logoutblack} />
                        <Text style={{ ...styles.title, color: themeColor }}>{title}</Text>
                    </View>

                    {/* Confirmation Message */}
                    <Text style={{...styles.message,color:themeColor}}>Do you want to {title}?</Text>

                    {/* Buttons */}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={onClose} style={{ ...styles.cancelBtn, borderColor: themeColor }}>
                            <Text style={{ ...styles.cancelText, color: themeColor }}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onConfirm} style={{ ...styles.deleteBtn, backgroundColor: theme == "red" ? "#E31D1C" : "#838383" }}>
                            <Text style={styles.deleteText}>{title}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default ConfirmationModal;


const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    modalContent: {
        backgroundColor: 'white',
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        padding: 25,
    },
    title: {
        fontSize: 21,
        fontFamily: "Urbanist-Bold",
        // color: themeColor,
        // marginBottom: 10,
    },
    header: {
        alignItems: 'center', flexDirection: "row", gap: 5, justifyContent: "center", alignItems: "center", borderBottomWidth: 0.85, borderColor: "#CACACA", paddingBottom: 20
    },
    message: {
        fontSize: 16,
        textAlign: "center",
        fontFamily: "Urbanist-Medium",
        marginVertical: 25,
        // color: '#333',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cancelBtn: {
        flex: 1,
        borderWidth: 1,
        // borderColor: '#D60000',
        borderRadius: 25,
        marginRight: 10,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cancelText: {
        // color: '#D60000',
        fontFamily: "Urbanist-Medium",
        fontSize: 15,
    },
    deleteBtn: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#D60000',
        borderRadius: 25,
        paddingVertical: 10,
        alignItems: 'center',
    },
    deleteText: {
        color: '#fff',
        fontFamily: "Urbanist-Bold",
        fontSize: 15,
    },
});

// PaymentConfirmedModal.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import { hands } from '../../assets/images';

const PaymentConfirmedModal = ({ visible, onClose }) => {
    return (
        <Modal visible={visible} transparent animationType="slide">
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Image source={hands} style={styles.image} />
                    <Text style={styles.title}>Payment Confirmed!</Text>
                    <TouchableOpacity style={styles.button} onPress={onClose}>
                        <Text style={styles.buttonText}>Go to Invoices</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
    modalContent: { backgroundColor: '#fff', width:"80%", padding: 30, borderRadius: 10, alignItems: 'center' },
    image: { width: 200, height: 180, resizeMode: "contain", marginBottom: 18 },
    title: { fontSize: 20, fontFamily: 'Urbanist-SemiBold', marginBottom: 30 },
    button: { backgroundColor: '#838383', padding: 14, borderRadius: 30,width: '100%', alignItems: 'center' },
    buttonText: { color: '#fff' },
});

export default PaymentConfirmedModal;

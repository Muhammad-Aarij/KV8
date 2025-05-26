// PaymentConfirmedModal.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';

const PaymentConfirmedModal = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Image source={require('./assets/payment.png')} style={styles.image} />
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
  modalContent: { backgroundColor: '#fff', padding: 30, borderRadius: 20, alignItems: 'center' },
  image: { width: 100, height: 100, marginBottom: 20 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 16 },
  button: { backgroundColor: '#444', padding: 14, borderRadius: 10 },
  buttonText: { color: '#fff' },
});

export default PaymentConfirmedModal;

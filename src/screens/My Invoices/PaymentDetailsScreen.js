import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import InvoiceCard from '../../components/InvoiceCard';
import Header from '../../components/Header';
import { card } from '../../assets/images';
import PaymentConfirmedModal from './PaymentConfirmedModal';

const invoicesData = { 
  id: '1', 
  invoiceNo: '2023-20', 
  childName: 'Andrew Ainsley', 
  guardianName: 'Michael Ainsley', 
  childClass: '7th B', 
  feeMonth: 'March', 
  status: 'Due', 
  totalFee: '$1000', 
  arrears: 'N/A' 
};

const PaymentDetailsScreen = ({ navigation }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <View style={styles.container}>
                {/* <Header title="Payment Details" /> */}
                <InvoiceCard {...invoicesData} payNow={false} />

                <View style={styles.card}>
                    <Image source={card} style={styles.cardIcon} />
                    <Text style={styles.invoiceNumber}>•••• •••• •••• •••• 4679</Text>
                </View>

                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => setShowModal(true)}
                >
                    <Text style={styles.buttonText}>Confirm Payment</Text>
                </TouchableOpacity>
            </View>

            <PaymentConfirmedModal visible={showModal} onClose={() => setShowModal(false)} />
        </>
    );
};

const styles = StyleSheet.create({
    container: { padding: 20, flex: 1, backgroundColor: '#fff' },
    card: { 
        flexDirection: "row", 
        alignItems: "center", 
        borderColor: '#888', 
        borderWidth: 1, 
        backgroundColor: "#F4F4F4", 
        padding: 13, 
        paddingHorizontal: 16, 
        borderRadius: 12, 
        marginTop: 10 
    },
    cardIcon: { width: 35, height: 35, resizeMode: "contain", marginRight: 15 },
    invoiceNumber: { fontSize: 16, fontFamily: "Urbanist-Bold" },
    button: { backgroundColor: '#838383', padding: 16, borderRadius: 30, marginTop: 20 },
    buttonText: { color: '#fff', fontFamily: "Urbanist-SemiBold", textAlign: 'center', fontSize: 15 },
});

export default PaymentDetailsScreen;

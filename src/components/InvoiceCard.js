import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { logoBlack } from '../assets/images';

const InvoiceCard = ({
  invoiceNo = '0000',
  childName = 'Unknown',
  guardianName = 'Unknown',
  childClass = 'N/A',
  feeMonth = 'N/A',
  status = 'Pending',
  totalFee = '$0',
  arrears = 'None',
}) => {
  return (
    <View style={styles.card}>
      <Image source={logoBlack} style={styles.logo} />
      <View style={styles.header}>
        <Text style={styles.subheading}>Fee Invoice</Text>
        <Text style={styles.label}>Invoice No: {invoiceNo}</Text>
      </View>

      <View style={styles.separator} />

      <View style={styles.details}>
        <Text style={styles.label}>Child Name</Text>
        <Text style={styles.value}>{childName}</Text>
      </View>

      <View style={styles.details}>
        <Text style={styles.label}>Parent / Guardian Name</Text>
        <Text style={styles.value}>{guardianName}</Text>
      </View>

      <View style={styles.details}>
        <Text style={styles.label}>Child Class</Text>
        <Text style={styles.value}>{childClass}</Text>
      </View>

      <View style={styles.details}>
        <Text style={styles.label}>Fee Month</Text>
        <Text style={styles.value}>{feeMonth}</Text>
      </View>

      <View style={styles.details}>
        <Text style={styles.label}>Status</Text>
        <Text style={[styles.value, { color: status === 'Due' ? 'red' : 'green' }]}>{status}</Text>
      </View>

      <View style={styles.details}>
        <Text style={styles.label}>Total Fee</Text>
        <Text style={styles.value}>{totalFee}</Text>
      </View>

      <View style={styles.details}>
        <Text style={styles.label}>Arrears</Text>
        <Text style={styles.value}>{arrears}</Text>
      </View>

      <View style={styles.separator} />

      <Text style={styles.subheading}>Payment Options</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { borderColor: '#888', borderWidth: 1, backgroundColor: "#F4F4F4", padding: 16, borderRadius: 12, marginBottom: 10 },
  logo: { width: 50, height: 50, resizeMode: "contain", alignSelf: "center" },
  header: { flexDirection: "row", justifyContent: "space-between", marginTop: 10 },
  subheading: { fontFamily: "Urbanist-Bold", fontSize: 18, color: "#212121" },
  separator: { borderTopWidth: 1, borderTopColor: "#D9D9D9", marginVertical: 12 },
  details: { flexDirection: "row", justifyContent: "space-between", marginBottom: 12 },
  label: { fontSize: 13, color: '#212121', fontFamily: "Urbanist-Medium" },
  value: { fontSize: 14, fontFamily: "Urbanist-SemiBold" },
  button: { backgroundColor: '#838383', padding: 12, borderRadius: 25, marginTop: 10 },
  buttonText: { color: '#fff', textAlign: 'center', fontFamily: "Urbanist-Medium" },
});

export default InvoiceCard;

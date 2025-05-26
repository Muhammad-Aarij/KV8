// PaymentDetailsScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PaymentDetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.invoiceNumber}>Invoice No: 2023-20</Text>
      <Text style={styles.label}>Child Name: <Text style={styles.value}>Andrew Ainsley</Text></Text>
      <Text style={styles.label}>Parent Name: <Text style={styles.value}>Michael Ainsley</Text></Text>
      <Text style={styles.label}>Class: <Text style={styles.value}>7th B</Text></Text>
      <Text style={styles.label}>Month: <Text style={styles.value}>March</Text></Text>
      <Text style={styles.label}>Total: <Text style={styles.value}>$1000</Text></Text>
      <Text style={styles.label}>Arrear: <Text style={styles.value}>N/A</Text></Text>
      <Text style={styles.label}>Card: <Text style={styles.value}>**** **** **** 4679</Text></Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PaymentConfirmed')}>
        <Text style={styles.buttonText}>Confirm Payment</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  invoiceNumber: { alignSelf: 'flex-end', fontSize: 12, marginBottom: 10 },
  label: { fontSize: 14, marginVertical: 5 },
  value: { fontWeight: '600' },
  button: { backgroundColor: '#444', padding: 14, borderRadius: 10, marginTop: 20 },
  buttonText: { color: '#fff', textAlign: 'center' },
});

export default PaymentDetailsScreen;

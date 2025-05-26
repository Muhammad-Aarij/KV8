// MyInvoicesScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const MyInvoicesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {[1, 2].map((i) => (
        <View key={i} style={styles.card}>
          <Text style={styles.invoiceNumber}>Invoice No: 2023-20</Text>
          <Text style={styles.label}>Child Name: <Text style={styles.value}>Andrew Ainsley</Text></Text>
          <Text style={styles.label}>Parent Name: <Text style={styles.value}>Michael Ainsley</Text></Text>
          <Text style={styles.label}>Class: <Text style={styles.value}>7th B</Text></Text>
          <Text style={styles.label}>Month: <Text style={styles.value}>March</Text></Text>
          <Text style={styles.label}>Status: <Text style={[styles.value, { color: 'green' }]}>Paid</Text></Text>
          <Text style={styles.label}>Total Fee: <Text style={styles.value}>$1000</Text></Text>
          <Text style={styles.label}>Arrear: <Text style={styles.value}>N/A</Text></Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  card: { backgroundColor: '#f2f2f2', padding: 16, borderRadius: 12, marginBottom: 16 },
  invoiceNumber: { alignSelf: 'flex-end', fontSize: 12, marginBottom: 10 },
  label: { fontSize: 13 },
  value: { fontWeight: '500' },
});

export default MyInvoicesScreen;

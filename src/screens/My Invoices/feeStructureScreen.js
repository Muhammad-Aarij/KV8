import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import InvoiceCard from '../../components/InvoiceCard';

const invoicesData = [
  { id: '1', invoiceNo: '2023-20', childName: 'Andrew Ainsley', guardianName: 'Michael Ainsley', childClass: '7th B', feeMonth: 'March', status: 'Due', totalFee: '$1000', arrears: 'N/A' },
  { id: '2', invoiceNo: '2023-21', childName: 'Emily Brown', guardianName: 'John Brown', childClass: '8th A', feeMonth: 'April', status: 'Paid', totalFee: '$1200', arrears: 'None' },
];

const FeeStructureScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={invoicesData}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View>
            <Text style={styles.title}>Fee Structure</Text>
            <Text style={styles.subheading}>Recent Invoices</Text>
          </View>
        )}
        renderItem={({ item }) => <InvoiceCard {...item} />}
        ListFooterComponent={() => (
          <TouchableOpacity style={styles.viewInvoicesButton} onPress={() => navigation.navigate('MyInvoices')}>
            <Text style={styles.buttonText}>View All Invoices</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom:5,
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontFamily: "Urbanist-Bold",
    fontSize: 20,
    marginVertical: 15,
    textAlign: "center",
    color: "#212121",
  },
  subheading: {
    fontFamily: "Urbanist-Bold",
    fontSize: 20,
    marginVertical: 15,
    color: "#212121",
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: "Urbanist-Medium",
  },
  viewInvoicesButton: {
    marginTop: 25,
    width:"60%",
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#838383',
    padding: 12,
    borderRadius: 25,
    marginBottom: 100,
  },
});

export default FeeStructureScreen;

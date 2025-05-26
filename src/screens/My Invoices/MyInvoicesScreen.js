import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import InvoiceCard from '../../components/InvoiceCard';
import Header from '../../components/Header';

const invoicesData = [
  {
    id: '1',
    invoiceNo: '2023-20',
    childName: 'Andrew Ainsley',
    guardianName: 'Michael Ainsley',
    childClass: '7th B',
    feeMonth: 'March',
    status: 'Due',
    totalFee: '$1000',
    arrears: 'N/A'
  },
  {
    id: '2',
    invoiceNo: '2023-21',
    childName: 'Emily Brown',
    guardianName: 'John Brown',
    childClass: '8th A',
    feeMonth: 'April',
    status: 'Paid',
    totalFee: '$1200',
    arrears: 'None'
  },
];

const MyInvoicesScreen = () => {
  return (
    <>
      <Header title="My Invoices" navigateTo={"Main"}/>
      <View style={styles.container}>
        <FlatList
          data={invoicesData}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <InvoiceCard {...item} payNow={false} />}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16, flex: 1, backgroundColor: '#fff' },
  title: {
    fontFamily: "Urbanist-Bold",
    fontSize: 20,
    marginVertical: 15,
    textAlign: "center",
    color: "#212121",
  },
});

export default MyInvoicesScreen;

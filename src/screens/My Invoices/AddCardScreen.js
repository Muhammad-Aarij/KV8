// AddCardScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const AddCardScreen = ({ navigation }) => {
  const [cardName, setCardName] = useState('Andrew Ainsley');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select Card</Text>
      <View style={styles.cardRow}>
        <Text style={styles.cardIcon}>💳</Text>
        <Text style={styles.cardIcon}>🔴</Text>
        <Text style={styles.cardIcon}>🟦</Text>
      </View>

      <TextInput style={styles.input} placeholder="Card Name" value={cardName} onChangeText={setCardName} />
      <TextInput style={styles.input} placeholder="Card Number" value={cardNumber} onChangeText={setCardNumber} />
      <TextInput style={styles.input} placeholder="Expiry" value={expiry} onChangeText={setExpiry} />
      <TextInput style={styles.input} placeholder="CVV" value={cvv} secureTextEntry />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PaymentDetails')}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  label: { fontSize: 14, marginBottom: 8 },
  cardRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  cardIcon: { fontSize: 28 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 8 },
  button: { backgroundColor: '#444', padding: 12, borderRadius: 8 },
  buttonText: { color: '#fff', textAlign: 'center' },
});

export default AddCardScreen;

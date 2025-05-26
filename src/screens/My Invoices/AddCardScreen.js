// AddCardScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import Header from '../../components/Header';
import { card, master, visa } from '../../assets/images';

const AddCardScreen = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    subject: '',
    class: '',
    dueDate: '',
    dueTime: '',
    attachment: '',
  });

  const handleChange = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  return (
    <>
      <Header title="Add Card" />
      <ScrollView contentContainerStyle={styles.container}>

        <View style={{ width: '100%' }}>
          <Text style={{ ...styles.label, marginBottom: 0 }}>Select Card</Text>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", marginVertical: 25 }}>
            <View style={styles.card}>
              <Image source={card} style={styles.cardIcon} />
            </View>
            <View style={styles.card}>
              <Image source={master} style={styles.cardIcon} />
            </View>
            <View style={styles.card}>
              <Image source={visa} style={styles.cardIcon} />
            </View>
          </View>
          <Input label="Card Name" value={formData.name} onChange={val => handleChange('name', val)} />
          <Input label="Card Number" value={formData.description} placeholder={"2672 4738 7837 7285"} onChange={val => handleChange('description', val)} />
          <View style={styles.row}>
            <Input label="Expiry" placeholder="09/07/26" value={formData.dueDate} style={styles.halfInput} onChange={val => handleChange('dueDate', val)} />
            <Input label="CVV" placeholder="879" value={formData.dueTime} style={styles.halfInput} onChange={val => handleChange('dueTime', val)} />
          </View>
        </View>

        <TouchableOpacity style={styles.submitBtn}>
          <Text style={styles.submitText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

const Input = ({ label, value, onChange, multiline = false, style, placeholder }) => (
  <View style={[styles.inputGroup, style]}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={[styles.inputField, multiline && styles.textArea]}
      value={value}
      onChangeText={onChange}
      placeholder={placeholder}
      multiline={multiline}
    />
  </View>
);


const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    padding: 20,
    paddingTop: 30,
    backgroundColor: '#FFFFFF',
    alignItems: "center",
    justifyContent: "space-between",
  },
  card: {
    borderColor: '#E5EBF3',
    borderWidth: 1.5,
    paddingVertical: 9,
    paddingHorizontal: 18,
    borderRadius: 12,
    marginTop: 10
  },
  cardIcon: { width: 40, height: 37, resizeMode: "contain",},
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  halfInput: {
    width: '48%',
  },
  label: {
    fontFamily: 'Urbanist-Bold',
    fontSize: 16,
    color: '#000000',
    marginBottom: 13,
  },
  inputGroup: {
    width: '100%',
    marginBottom: 15,
  },
  inputField: {
    fontFamily: 'Urbanist-Medium',
    fontSize: 14,
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DBDBDB',
    padding: 16,
    color: '#000',
  },
  textArea: {
    minHeight: 80,
    textAlignVertical: 'top',
  },
  attachmentBox: {
    width: '100%',
    backgroundColor: '#FFF',
    borderStyle: 'dashed',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    paddingVertical: 35,
    gap: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  attachmentText: {
    fontFamily: 'Urbanist-SemiBold',
    fontSize: 14,
    color: '#555',
  },
  submitBtn: {
    backgroundColor: '#838383',
    paddingVertical: 18,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
    // marginTop: 20,
  },
  submitText: {
    color: 'white',
    fontFamily: 'Urbanist-Bold',
    fontSize: 16,
  },
});


export default AddCardScreen;

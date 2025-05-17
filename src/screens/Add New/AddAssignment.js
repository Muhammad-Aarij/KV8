import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../../components/Header';

const AddAssignment = () => {
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
      <Header title="Add Assignment" />
      <ScrollView contentContainerStyle={styles.container}>
        <Input label="Name of the assignment" value={formData.name} onChange={val => handleChange('name', val)} />
        <Input label="Description" value={formData.description} multiline onChange={val => handleChange('description', val)} />
        <Input label="Subject" value={formData.subject} onChange={val => handleChange('subject', val)} />
        <Input label="Class" value={formData.class} onChange={val => handleChange('class', val)} />
        <View style={styles.row}>
          <Input label="Due Date" value={formData.dueDate} style={styles.halfInput} onChange={val => handleChange('dueDate', val)} />
          <Input label="Due Time" value={formData.dueTime} style={styles.halfInput} onChange={val => handleChange('dueTime', val)} />
        </View>

        <View style={styles.attachmentBox}>
          <Text style={styles.attachmentText}>📎 Upload PDFs, images, or documents</Text>
        </View>

        <TouchableOpacity style={styles.submitBtn}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

const Input = ({ label, value, onChange, multiline = false, style }) => (
  <View style={[styles.inputGroup, style]}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={[styles.inputField, multiline && styles.textArea]}
      value={value}
      onChangeText={onChange}
      multiline={multiline}
    />
  </View>
);

export default AddAssignment;

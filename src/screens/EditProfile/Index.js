import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function EditProfileScreen() {
  const [name, setName] = useState('Andrew Ainsley');
  const [username, setUsername] = useState('Andrew');
  const [dob, setDob] = useState('12/27/1995');
  const [email, setEmail] = useState('andrew_ainsley@yourdomain.com');
  const [country, setCountry] = useState('United States');
  const [gender, setGender] = useState('Male');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>

      <View style={styles.avatarWrapper}>
        <View style={styles.avatar}>
          {/* <Ionicons name="person-outline" size={40} color="#ccc" /> */}
        </View>
        <TouchableOpacity style={styles.editIcon}>
          {/* <MaterialIcons name="edit" size={18} color="#000" /> */}
        </TouchableOpacity>
      </View>

      <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Full Name" />
      <TextInput style={styles.input} value={username} onChangeText={setUsername} placeholder="Username" />

      <InputWithIcon
        value={dob}
        onChangeText={setDob}
        placeholder="Date of Birth"
        // icon={<Ionicons name="calendar-outline" size={20} color="#888" />}
      />
      <InputWithIcon
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        // icon={<Ionicons name="mail-outline" size={20} color="#888" />}
      />
      <InputWithIcon
        value={country}
        onChangeText={setCountry}
        placeholder="Country"
        // icon={<Ionicons name="chevron-down" size={20} color="#888" />}
      />
      <InputWithIcon
        value={gender}
        onChangeText={setGender}
        placeholder="Gender"
        // icon={<Ionicons name="chevron-down" size={20} color="#888" />}
      />

      <TouchableOpacity style={styles.updateBtn}>
        <Text style={styles.updateText}>Update</Text>
      </TouchableOpacity>
    </View>
  );
}

const InputWithIcon = ({ value, onChangeText, placeholder, icon }) => {
  return (
    <View style={styles.wrapper}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.input}
        placeholderTextColor="#888"
      />
      {icon}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 20 },
  avatarWrapper: { alignItems: 'center', marginBottom: 20 },
  avatar: {
    backgroundColor: '#f2f2f2',
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  editIcon: {
    position: 'absolute',
    right: 115,
    top: 70,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 5,
    elevation: 3,
  },
  input: {
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 12,
    fontSize: 14,
  },
  updateBtn: {
    backgroundColor: '#2D2D2D',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  updateText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  wrapper: {
    flexDirection: 'row',
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  input: {
    fontSize: 14,
    flex: 1,
    color: '#000',
  },
});

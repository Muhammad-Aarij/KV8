import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import { User } from '../../assets/images';
import ListTeacherCard from '../../components/ListTeacherCard';
const teachers = [
    {
        id: '1',
        name: 'Andrew Ainsley',
        email: 'AndrewAinsley@21gmail.io',
        image: User,
    },
    {
        id: '2',
        name: 'Johnson',
        email: 'John82@gmail.io',
        image: User,
    },
    {
        id: '3',
        name: 'Mark Wood',
        email: 'AndrewAinsley@21gmail.io',
        image: User,
    },
    {
        id: '4',
        name: 'Andrew Ainsley',
        email: 'AndrewAinsley@21gmail.io',
        image: User,
    },
];

const TotalTeacherList = () => {
    return (
        <>
            <Header title="Total Teacher List" />
            <FlatList
                data={teachers}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContainer}
                renderItem={({ item }) => (
                    <ListTeacherCard id={item.id}  name={item.name}  image={item.image} email={item.email}  />
                )}
            />
        </>
    );
};
const styles = StyleSheet.create({
    listContainer: {
        height: '100%',
        padding: 20,
        paddingTop: 25,
        backgroundColor: '#fff',
        paddingBottom: 30,
    },
  
});


export default TotalTeacherList;

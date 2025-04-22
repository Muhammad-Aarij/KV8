import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Pressable, Image } from 'react-native';
import { arrow, Send, User } from '../../assets/images';
import theme from '../../themes/theme';


const messages = [
    { sender: 'user', text: 'Lorem' },
    { sender: 'receiver', text: 'Lorem ipsum dolor sit amet' },
    { sender: 'user', text: 'Lorem ipsum dolor sit amet consectetur. Sit egestas leo integer sed vitae tortor cras.' },
    { sender: 'user', text: 'Lorem ipsum dolor sit amet consectetur.' },
    { sender: 'user', text: 'Lorem ipsum dolor sit amet consectetur.' },
    { sender: 'user', text: 'Lorem ipsum dolor sit amet consectetur.' },
    { sender: 'user', text: 'Lorem ipsum dolor sit amet consectetur.' },
    { sender: 'user', text: 'Lorem ipsum dolor sit amet consectetur.' },
    { sender: 'receiver', text: 'Sit egestas leo integer sed vitae tortor cras.' },
    { sender: 'user', text: 'Lorem' },
];

const Index = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header} >
                <Pressable >
                    <Image style={styles.logo} source={arrow} />
                </Pressable>
                <Image style={styles.user} source={User} />

                <Text style={styles.title}>Andrew Ainsley</Text>
            </View>
            <ScrollView style={styles.messagesContainer} showsVerticalScrollIndicator={false}>
                {messages.map((msg, i) => (
                    <View key={i} style={[styles.messageWrapper, msg.sender === 'user' ? styles.alignRight : styles.alignLeft]}>
                        <View style={[styles.messageBubble, msg.sender === 'user' ? styles.bubbleUser : styles.bubbleReceiver]}>
                            <Text style={msg.sender === 'user' ? styles.textWhite : styles.textBlack}>{msg.text}</Text>
                        </View>
                        <Text style={styles.timeText}>8:36pm</Text>
                    </View>
                ))}
            </ScrollView>
            <View style={styles.inputContainer}>
                <TextInput multiline placeholder="Type a message ..." placeholderTextColor={"#9E9E9E"} style={styles.textInput} />
                <TouchableOpacity style={styles.sendButton}>
                    <Image style={styles.send} source={Send} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', padding: 18 },
    header: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",

        gap: 10,
    },
    logo: {
        width: 22,
        height: 22,
        resizeMode: "contain",
    },
    send: {
        width: 24,
        height: 24,
        resizeMode: "contain",
    },
    user: {
        width: 38,
        height: 38,
        borderRadius: 100,
        resizeMode: "contain",
    },
    title: {
        fontSize: 20,
        fontFamily: "Urbanist-Bold",
        color: "black",

    },
    messagesContainer: { flex: 1 },
    messageWrapper: { marginVertical: 6 },
    alignRight: { alignItems: 'flex-end' },
    alignLeft: { alignItems: 'flex-start' },
    messageBubble: { padding: 12, maxWidth: '80%' },
    bubbleUser: { backgroundColor: '#202020', borderRadius: 18, borderBottomRightRadius: 0 },
    bubbleReceiver: { backgroundColor: '#E9E9E9E5', borderRadius: 18, borderBottomLeftRadius: 0 },
    textWhite: { color: '#fff', fontFamily: "Urbanist-Regular", fontsize: 14 },
    textBlack: { color: '#000', fontFamily: "Urbanist-Regular", fontsize: 14 },
    timeText: { fontSize: 10, color: '#888', marginTop: 4, fontFamily: "Urbanist-Regular", },
    inputContainer: { flexDirection: 'row', alignItems: 'center', paddingTop: 18, borderTopWidth: 0.8, borderColor: '#E6E6E6' },
    textInput: { flex: 1, backgroundColor: '#F3F3F3', borderRadius: 16, paddingHorizontal: 20, minHeight: 56, fontFamily: "Urbanist-Regular", fontsize: 14 },
    sendButton: { marginLeft: 8, backgroundColor: theme.colors.darkGray, borderRadius: 200, padding: 16, },
    sendText: { color: '#fff' },
});

export default Index;
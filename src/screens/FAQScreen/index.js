import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, LayoutAnimation, Image } from 'react-native';
import Header from '../../components/Header';
import { Headphone, DownArrow, UpArrow } from '../../assets/images';

const faqs = [
    { question: "What is KVB App?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", expanded: false },
    { question: "How to use KVB App?", answer: "This app allows you to...", expanded: false },
    { question: "Is KVB App free to use?", answer: "Yes, it's completely free.", expanded: false },
];

const Index = () => {
    const [activeTab, setActiveTab] = useState('FAQs');
    const [faqData, setFaqData] = useState(faqs);

    const toggleExpand = (index) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        const newData = [...faqData];
        newData[index].expanded = !newData[index].expanded;
        setFaqData(newData);
    };

    return (
        <>
            <Header title={"FAQs"} />
            <View style={styles.container}>
                <View style={styles.tabContainer}>
                    <TouchableOpacity style={{ width: "50%" }} onPress={() => setActiveTab('FAQs')}>
                        <Text style={[styles.tab, activeTab === 'FAQs' && styles.activeTab]}>FAQs</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: "50%" }} onPress={() => setActiveTab('Contact')}>
                        <Text style={[styles.tab, activeTab === 'Contact' && styles.activeTab]}>Contact Us</Text>
                    </TouchableOpacity>
                </View>

                {activeTab === 'FAQs' ? (
                    <View>
                        {faqData.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.faqItem}
                                onPress={() => toggleExpand(index)}
                            >
                                <View style={styles.faqHeader}>
                                    <Text style={styles.question}>{item.question}</Text>
                                    <Image source={!item.expanded ? DownArrow : UpArrow} style={{ width: 24, height: 24 }} />
                                </View>
                                {item.expanded && <Text style={styles.answer}>{item.answer}</Text>}
                            </TouchableOpacity>
                        ))}
                    </View>
                ) : (
                    <View style={styles.contactBox}>
                        <Image source={Headphone} style={{ width: 24, height: 24 }} />
                        <Text style={styles.contactText}>Customer Service</Text>
                    </View>
                )}
            </View>
        </>
    );
};

export default Index;

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', padding: 28, paddingTop: 40 },
    tabContainer: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20, borderBottomWidth: 1, borderBottomColor: '#4F4F4F' },
    tab: { fontSize: 16, fontFamily: "Urbanist-Bold", paddingBottom: 8, width: "100%", textAlign: "center",color:"#4F4F4F" },
    activeTab: { borderBottomWidth: 2, borderBottomColor: '#000',color:"#000000" },
    faqItem: {
        backgroundColor: '#F4F4F4',
        borderRadius: 18,
        padding: 20,
        marginBottom: 12,
    },
    faqHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    question: { fontFamily: "Urbanist-Bold", fontSize: 16 },
    answer: { marginTop: 13, paddingTop: 13, color: '#555', fontSize: 14, fontFamily: "Urbanist-SemiBold", borderTopWidth: 0.8, borderColor: "#000000" ,    lineHeight: 20,
    },
    contactBox: {
        padding: 20,
        backgroundColor: '#f6f6f6',
        borderRadius: 18,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    contactText: {
        fontSize: 16,
        fontFamily: "Urbanist-Bold",
    },
});

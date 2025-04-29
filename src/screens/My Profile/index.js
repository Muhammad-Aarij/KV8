import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, } from 'react-native';
import ConfirmationModal from '../../components/ConfirmationModal';
import { RightArrow, deleteRed, Profile, Notification, InfoSquare, Logout } from '../../assets/images';

const Index = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [actionTitle, setActionTitle] = useState('');

    const handleAction = (type) => {
        setActionTitle(type);
        setModalVisible(true);
    };

    const confirmAction = () => {
        setModalVisible(false);
        console.log(`${actionTitle} confirmed`);
        // handle logic here
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.topSection}>
                    <View style={{ ...styles.circle, top: -30, left: -20, }} />
                    <View style={{ ...styles.circle, top: 30, left: -10, }} />
                    <View style={{ ...styles.circle, bottom: 20, right: -20, }} />
                    <View style={{ ...styles.circle, bottom: -35, right: -10, }} />

                    <Text style={styles.header}>My Profile</Text>
                    <View style={{ position: "absolute", bottom: -90, justifyContent: "center", alignItems: "center" }} >
                        <Image
                            source={{ uri: 'https://randomuser.me/api/portraits/men/75.jpg' }}
                            style={styles.profileImage}
                        />
                        <Text style={styles.username}>Andrew Ainsley</Text>
                    </View>
                </View>

                <View style={styles.options}>
                    <Option title="Edit Profile"
                        icon={Profile}
                    />
                    <Option title="Notification"
                        icon={Notification}
                        onPress={()=>navigation.navigate("Notification")}
                        />
                    <Option title="Help Center"
                        icon={InfoSquare}
                        onPress={()=>navigation.navigate("FAQ")}
                    />
                    <Option title="Delete Account"
                        color="#D60000"
                        icon={deleteRed}
                        onPress={() => handleAction('Delete Account')}
                    />
                </View>
                <View style={{ width: "100%", alignItems: "flex-end" }}>
                    <TouchableOpacity
                        style={styles.logoutBtn}
                        onPress={() => handleAction('Logout')}
                    >
                        <Image style={styles.img} source={Logout} />
                        <Text style={styles.logoutText}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <ConfirmationModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                onConfirm={confirmAction}
                title={actionTitle}
                theme={actionTitle == 'Delete Account' ? 'red' : 'black'}
            />
        </View>
    );
};

const Option = ({ title, icon, color = '#333', onPress }) => (
    <TouchableOpacity style={styles.optionItem} onPress={onPress}>
        <View style={styles.optionLeft}>
            <Image style={styles.img} source={icon} />
            <Text style={[styles.optionText, { color }]}>{title}</Text>
        </View>
        <Image style={styles.img} source={RightArrow} />
    </TouchableOpacity>
);

export default Index;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContent: {
        paddingBottom: 40,
    },
    topSection: {
        alignItems: 'center',
        backgroundColor: '#000',
        paddingBottom: 30,
        paddingTop: 60,
        height: 200,

    },
    circle: {
        width: 100,
        height: 100,
        borderRadius: 100,
        backgroundColor: '#FFFFFF1A',
        position: "absolute",

    },
    header: {
        alignSelf: "flex-start",
        color: '#fff',
        fontSize: 22,
        fontFamily: "Urbanist-Bold",
        marginLeft: 28,
    },
    profileImage: {
        width: 125,
        height: 125,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#fff',
    },
    username: {
        marginTop: 12,
        fontSize: 20,
        fontFamily: "Urbanist-Bold",
        color: '#000000',
    },
    options: {
        borderTopWidth: 1,
        borderColor: "#EEEEEE",
        marginTop: 120,
        paddingTop: 15,
        marginHorizontal: 28,
        gap: 12,
    },
    optionItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 14,
        // borderBottomWidth: 1,
        // borderBottomColor: '#eee',
    },
    optionLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    optionText: {
        fontFamily: "Urbanist-Bold",
        fontSize: 16,
    },
    logoutBtn: {
        flexDirection: 'row',
        // alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#D6052236',
        marginHorizontal: 28,
        paddingHorizontal: 30,
        height: 50,
        borderRadius: 12,
        marginTop: 30,
        gap: 10,
    },
    logoutText: {
        color: '#D60000',
        fontWeight: '600',
        fontSize: 15,
    },
    img: {
        width: 22,
        height: 22,
        resizeMode: 'contain',
    },
});

import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Header from '../../components/Header'
import forgetpassword from '../../assets/newP.png'
import Message from '../../assets/Message.png'
import theme from '../../themes/theme'
import Button from '../../components/Button'
import CustomInput from '../../components/CustomInput'

export default function index() {
    return (
        <>
            <Header title={"Create a New Password"} />
            <View style={styles.container}>
                <Image style={{ width: "100%", height: 250, resizeMode: "contain" }} source={forgetpassword} />
                <Text style={styles.text}>
                    Create Your New Password
                </Text>

                <View style={{gap:20,marginBottom:20}}>
                    <CustomInput placeholder="Enter new password" isPassword={true} />
                    <CustomInput placeholder="Enter new password again" isPassword={true} />
                </View>

                <Button title={"Continue"} />
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        padding: 20,
        flex: 1,
        backgroundColor: "white",
    },
    text: {
        marginLeft: 5,
        marginTop: 20,
        fontFamily: "Urbanist-Medium",
        fontSize: 18,
        marginVertical: 20,
    },

})
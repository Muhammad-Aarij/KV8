import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Header from '../../components/Header'
import forgetpassword from '../../assets/forgetpassword.png'
import Message from '../../assets/Message.png'
import theme from '../../themes/theme'
import Button from '../../components/Button'

export default function index() {
    return (
        <>
            <Header title={"Forget Password"} />
            <View style={styles.container}>
                <Image style={{ width: "100%", height: 250, resizeMode: "contain" }} source={forgetpassword} />
                <Text style={styles.text}>
                    Select which contact details should we use to reset your password
                </Text>

                <View style={styles.box}>
                    <View style={styles.imageContainer}>
                        <Image style={{ width: 24, height: 24, resizeMode: "contain" }} source={Message} />
                    </View>
                    <View style={{ flexDirection: "column", gap: 10, paddingVertical: 10 }}>
                        <Text style={{ color: theme.colors.primary, fontSize: 14, fontFamily: "Urbanist-Medium" }}>via Email :</Text>
                        <Text style={{ color: theme.colors.text, fontSize: 16, fontFamily: "Urbanist-Bold" }}>and***ley@yourdomain.com</Text>
                    </View>
                </View>

                <Button title={"Continue"} />
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        padding: 20,
        flex: 1,
        // alignItems: "center",
    },
    text: {
        marginLeft:5,
        marginTop: 20,
        fontFamily: "Urbanist-Medium",
        fontSize: 16,
    },
    box: {
        borderRadius: 19,
        marginVertical: 20,
        marginBottom:50,
        width: "100%",
        flexDirection: "row",
        alignItems:"center",
        borderWidth: 1,
        borderColor: theme.colors.text,
        overflow: 'hidden',
    },
    imageContainer: {
        margin:20,
        justifyContent:"center",
        alignItems:"center",
        padding: 10,
        borderRadius:100,
        backgroundColor: "#4E74F914",
    },
})
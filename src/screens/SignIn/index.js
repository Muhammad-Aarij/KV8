import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground } from "react-native";
import theme from "../../themes/theme";
import logo from "../../assets/logo.png";
import bg from "../../assets/Head.png";
import Button from "../../components/Button";
import CustomInput from "../../components/CustomInput";
import checkBoxCheckedIcon from "../../assets/checbox.png";
import checkBoxUncheckedIcon from "../../assets/unchecked.png";

export default function Index({ route, navigation }) {
    const role = route.params;
    const [rememberMe, setRememberMe] = useState(false);

    return (
        <View style={styles.container}>
            {/* Header with Logo */}
            <ImageBackground style={styles.header} source={bg}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={logo} />
                </View>
                <Text style={styles.subTitle}>Sign In to your Account</Text>
            </ImageBackground>

            {/* Input Fields */}
            <View style={styles.container2}>
                <Text style={styles.label}>Email</Text>
                <CustomInput placeholder="Enter your email" />

                <Text style={styles.label}>Password</Text>
                <CustomInput placeholder="Enter your password" isPassword={true} />

                <Text style={styles.label}>Position</Text>
                <CustomInput placeholder="Enter your position" />

                {/* Remember Me & Forgot Password */}
                <View style={styles.rememberContainer}>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        alignItems: "center",
                    }}>
                        <TouchableOpacity onPress={() => setRememberMe(!rememberMe)}>
                            <Image
                                source={rememberMe ? checkBoxCheckedIcon : checkBoxUncheckedIcon}
                                style={styles.checkboxIcon}
                            />
                        </TouchableOpacity>
                        <Text style={{ ...styles.label, marginBottom: 4, marginLeft: 0 }}>Remember Me</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate("Forget Password")} >
                        <Text style={[styles.label, styles.forgotPassword]}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>

                <Button title="Sign In" onPress={() => navigation.navigate('Main')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        alignItems: "center",
    },
    container2: {
        flex: 1,
        width: "100%",
        padding: 20,
    },
    header: {
        paddingTop: 40,
        width: "100%",
        minHeight: 200,
        resizeMode: "cover",
        alignItems: "flex-start",
    },
    logoContainer: {
        width: "100%",
        padding: 10,
        backgroundColor: "#FFFFFF0D",
        alignItems: "center",
    },
    logo: {
        width: "100%",
        height: 50,
        resizeMode: "contain",
    },
    subTitle: {
        fontFamily: "Urbanist-Bold",
        fontSize: 32,
        color: "white",
        width: "70%",
        marginTop: 30,
        marginBottom: 55,
        marginLeft: 20,
    },
    label: {
        fontFamily: "Urbanist-Medium",
        fontSize: 13,
        color: "black",
        marginBottom: 8,
        marginLeft: 5,
    },
    rememberContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 10,
    },
    checkboxIcon: {
        width: 24,
        height: 24,
        marginRight: 5,
    },
    forgotPassword: {
        color: theme.colors.danger,
    },
});


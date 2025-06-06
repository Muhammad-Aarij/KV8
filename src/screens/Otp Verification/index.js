import React, { useState, useEffect, useRef } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from "react-native";
import Header from "../../components/Header";
import forgetpassword from "../../assets/OtpVerification.png";
import theme from "../../themes/theme";
import Button from "../../components/Button";

export default function Index({ navigation }) {
  const [otp, setOtp] = useState(["", "", "", ""]); 
  const [activeIndex, setActiveIndex] = useState(0); 
  const inputRefs = useRef([]); 
  const [countdown, setCountdown] = useState(59); 

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  // Handle OTP Input
  const handleChange = (text, index) => {
    let newOtp = [...otp];

    if (text.length > 1) {
      text = text.slice(-1); 
    }

    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < otp.length - 1) {
      setActiveIndex(index + 1); // Move to next active box
      inputRefs.current[index + 1].focus(); // Move focus
    }
  };

  // Handle Backspace to Clear & Move Back
  const handleKeyPress = (event, index) => {
    if (event.nativeEvent.key === "Backspace") {
      let newOtp = [...otp];

      if (newOtp[index] !== "") {
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        setActiveIndex(index - 1); 
        inputRefs.current[index - 1].focus();
      }
    }
  };

  return (
    <>
      <Header title="OTP Verification" />
      <View style={styles.container}>
        <Image style={{ width: "100%", height: 250, resizeMode: "contain" }} source={forgetpassword} />
        <Text style={styles.text}>Code has been sent to +1 111 ******99</Text>

        {/* OTP Input Boxes */}
        <View style={styles.boxContainer}>
          {otp.map((digit, index) => (
            <View key={index} style={activeIndex === index ? styles.boxActive : styles.box}>
              <TextInput
                ref={(ref) => (inputRefs.current[index] = ref)}
                style={styles.input}
                keyboardType="number-pad"
                maxLength={1}
                value={digit}
                onChangeText={(text) => handleChange(text, index)}
                onKeyPress={(event) => handleKeyPress(event, index)}
                autoFocus={index === 0}
              />
            </View>
          ))}
        </View>

        {/* Countdown Timer */}
        {countdown > 0 ? (
          <Text style={styles.text2}>Resend code in {countdown}s</Text>
        ) : (
          <TouchableOpacity onPress={() => setCountdown(59)}>
            <Text style={[styles.text2, styles.resendText]}>Resend Code</Text>
          </TouchableOpacity>
        )}

        <Button title="Continue" onPress={() => navigation.navigate("New Password")} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: "white",
    padding: 20,
    flex: 1,
  },
  text: {
    alignSelf: "center",
    fontFamily: "Urbanist-Medium",
    fontSize: 16,
    marginTop: 20,
  },
  text2: {
    alignSelf: "center",
    fontFamily: "Urbanist-Medium",
    fontSize: 13,
    marginBottom: 50,
  },
  resendText: {
    color: theme.colors.primary,
    fontWeight: "bold",
  },
  boxContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginVertical: 20,
  },
  box: {
    width: 75,
    height: 65,
    borderRadius: 19,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EEEEEE",
    borderWidth: 1,
    borderColor: "#EEEEEE",
  },
  boxActive: {
    width: 75,
    height: 65,
    borderRadius: 19,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4E74F914",
    borderWidth: 1,
    borderColor: "black",
  },
  input: {
    width: "100%",
    height: "100%",
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Urbanist-Bold",
    color: theme.colors.text,
  },
});

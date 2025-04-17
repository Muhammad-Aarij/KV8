import React, { useState, useEffect, useRef } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from "react-native";
import Header from "../../components/Header";
import forgetpassword from "../../assets/OtpVerification.png";
import theme from "../../themes/theme";
import Button from "../../components/Button";

export default function Index() {
  const [otp, setOtp] = useState(["", "", "", ""]); // Stores 4-digit OTP
  const [activeIndex, setActiveIndex] = useState(0); // Tracks active box index
  const inputRefs = useRef([]); // Stores input field references
  const [countdown, setCountdown] = useState(59); // Timer for resend

  // Countdown Timer
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
      text = text.slice(-1); // Allow only one digit per box
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
        setActiveIndex(index - 1); // Move to previous active box
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
                autoFocus={index === 0} // Auto-focus on first box
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

        <Button title="Continue" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
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

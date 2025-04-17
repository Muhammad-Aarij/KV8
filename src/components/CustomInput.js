import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import theme from "../themes/theme";
import eyeOpenIcon from "../assets/eye-open.png";
import eyeClosedIcon from "../assets/eye-closed.png";

export default function CustomInput({ placeholder, isPassword = false }) {
  const [isVisible, setIsVisible] = useState(!isPassword);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={!isVisible}
      />
      {isPassword && (
        <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
          <Image
            source={isVisible ? eyeOpenIcon : eyeClosedIcon}
            style={styles.icon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 45,
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#DBDBDB",
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    fontSize: 15,
    fontFamily: "Urbanist-Medium",
    color: "black",
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: theme.colors.primary,
  },
});

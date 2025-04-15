import React, { useEffect, useRef } from "react";
import { Image, StyleSheet, View, Animated } from "react-native";
import logo from "../../assets/logo.png";
import left from "../../assets/left.png";
import right from "../../assets/right.png";

export default function Index() {
  const borderAnimation = useRef(new Animated.Value(20)).current; // Start from 20

  useEffect(() => {
    const animateBorder = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(borderAnimation, {
            toValue: 40, // Increase border width
            duration: 1000, // 1 second
            useNativeDriver: false,
          }),
          Animated.timing(borderAnimation, {
            toValue: 20, // Decrease border width
            duration: 1000, // 1 second
            useNativeDriver: false,
          }),
        ])
      ).start();
    };

    animateBorder();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.logoContainer, { borderWidth: borderAnimation }]}>
        <Image style={styles.logo} source={logo} />
      </Animated.View>

      {/* Left Image */}
      <Image style={styles.left} source={left} />

      {/* Right Image */}
      <Image style={styles.right} source={right} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    borderRadius: 500,
    borderColor: "#0000000D",
    padding: 40,
    backgroundColor: "black",
  },
  left: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 45,
    height: 119,
    resizeMode: "contain",
  },
  right: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 53,
    height: 120,
    resizeMode: "contain",
  },
});

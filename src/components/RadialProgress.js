import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Circle } from "react-native-svg";

const RadialProgress = ({ progress = 45, size = 70, strokeWidth = 7 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progressCircumference = circumference * 0.75; // 75% of the full circle for an open-bottom effect
  const strokeDashoffset = progressCircumference * (1 - progress / 100);

  return (
    <View style={styles.container}>
      <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Background Circle */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#E0E0E0"
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress Arc (not full circle) */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="black"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={progressCircumference} // Arc length (only 75% of full circle)
          strokeDashoffset={strokeDashoffset} // Moves stroke based on progress
          transform={`rotate(135 ${size / 2} ${size / 2})`} // Start stroke from left side
        />
      </Svg>
      {/* Display Percentage */}
      <Text style={styles.percentage}>{progress}%</Text>
      <Text style={styles.label}>Attendance</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginVertical:18,
  },
  percentage: {
    position: "absolute",
    fontSize: 18,
    fontFamily:"Urbanist-Bold",
},
label: {
    position: "absolute",
    bottom: -20,
    fontFamily:"Urbanist-Bold",
    fontSize: 10,
    color: "#333",
  },
});

export default RadialProgress;

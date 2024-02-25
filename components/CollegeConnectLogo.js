import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const CollegeConnectLogo = () => {
  return (
    <ImageBackground
      style={styles.collegeConnectLogo1}
      resizeMode="cover"
      source={require("../assets/collegeconnectlogo1.png")}
    />
  );
};

const styles = StyleSheet.create({
  collegeConnectLogo1: {
    width: 59,
    height: 104,
  },
});

export default CollegeConnectLogo;

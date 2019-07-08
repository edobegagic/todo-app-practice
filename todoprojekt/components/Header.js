import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FFD348",
    height: 80,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    textTransform: "uppercase",
    fontFamily: "monospace"
  }
});

export default Header;

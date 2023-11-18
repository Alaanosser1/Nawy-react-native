import React from "react";
import { View, TextInput, StyleSheet, ImageBackground } from "react-native";

const SearchBar = () => {
  return (
    <ImageBackground
      source={require("../../images/sodic.jpg")}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Search..."
            placeholderTextColor="#fff"
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
    maxHeight: 250,
    height: 250,
  },
  inputContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    width: "80%",
    borderRadius: 8,
    padding: 10,
  },
  input: {
    color: "#fff",
    fontSize: 16,
  },
});

export default SearchBar;

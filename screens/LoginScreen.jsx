import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import * as AuthSession from "expo-auth-session";
import { getAuth, } from "firebase/auth";

const LoginScreen = () => {

  const handleGoogleLogin = () => {
    console.log("Google login");
  }

  return (
    <LinearGradient colors={["#FD5D36", "#FC2F68"]} style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
          <Text style={styles.googleButtonText}>Log in with Google</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  googleButton: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  googleButtonText: {
    color: "#FD5D36",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default LoginScreen;

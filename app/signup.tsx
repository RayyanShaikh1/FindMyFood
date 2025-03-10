import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { auth } from "../FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

import Button from "@/components/Button";
import TextBox from "@/components/TextBox";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Entry() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      if (user) router.replace("/(tabs)/home");
    } catch (error: any) {
      console.log(error);
      alert("Sign in failed: " + error.message);
    }
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#e8ecf4",
        flex: 1,
      }}
    >
      <View style={styles.container}>
        <StatusBar style="light" />
        <Image source={require("@/assets/images/appicon.png")} />
        <Text style={styles.title}>Find My Food!</Text>
        <TextBox
          placeholder="Email or username"
          value={email}
          onChangeText={setEmail}
        />
        <TextBox
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <Button
          containerStyles={styles.button}
          onPress={signUp}
          title="Sign Up"
        />
        <View
          style={{
            height: 0.5,
            backgroundColor: "grey",
            width: 350,
            marginVertical: 20,
          }}
        />
        <Text style={{ textAlign: "center", color: "black" }}>
          Have an account?
          <TouchableOpacity onPress={() => router.push("/")}>
            <Text style={{ color: "blue" }}> Sign In.</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#177DA9",
    minWidth: 350,
    height: 50,
    marginVertical: 10,
    borderRadius: 16,
  },
  title: {
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
    fontSize: 32,
  },
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
  },
});

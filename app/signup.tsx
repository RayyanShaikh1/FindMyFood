import { Text, View, Image, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { auth } from "../FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import Button from "@/components/Button";
import TextBox from "@/components/TextBox";

export default function Entry() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      if (user) router.replace("/(tabs)/home");
    } catch (error: any) {
      console.log(error);
      alert("Sign in failed: " + error.message);
    }
  };

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
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <StatusBar style="light" />
      <Image source={require("@/assets/images/appicon.png")} />
      <Text
        style={{
          textAlign: "center",
          color: "black",
          fontWeight: "bold",
          fontSize: 32,
        }}
      >
        Find My Food!
      </Text>
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
      <Button onPress={signUp} title="Sign Up" />
    </View>
  );
}

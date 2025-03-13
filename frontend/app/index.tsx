import { Image, SafeAreaView, StyleSheet, Text } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import { auth } from "@/FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Input, Button } from "@rneui/themed";

export default function App() {
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

  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <Image
        source={require("@/assets/images/fmf_icon.png")}
        style={styles.imageContainer}
      />
      <Text style={styles.title}>Login</Text>
      <Input
        inputContainerStyle={styles.inputContainerStyle}
        inputStyle={styles.inputStyle}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Input
        inputContainerStyle={styles.inputContainerStyle}
        inputStyle={styles.inputStyle}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <Button
        buttonStyle={[styles.buttonStyle, { width: 300 }]}
        containerStyle={[styles.buttonContainerStyle, { paddingTop: 10 }]}
        onPress={() => router.push("/home")}
        title="Login"
      />
      <Button
        containerStyle={[styles.buttonContainerStyle, { paddingTop: 200 }]}
        onPress={() => router.push("/signup")}
        title="Sign Up"
        titleStyle={{ color: "white" }}
        type="clear"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: "#0F4B65",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    height: 250,
    width: 250,
  },
  title: {
    color: "white",
    fontSize: 32,
    fontWeight: 600,
    paddingBottom: 20,
  },
  inputStyle: {
    paddingLeft: 10,
  },
  inputContainerStyle: {
    backgroundColor: "white",
    borderRadius: 3,
    margin: "auto",
    width: 300,
  },
  buttonStyle: {
    backgroundColor: "#177DA9",
    borderRadius: 3,
  },
  buttonContainerStyle: {
    alignItems: "center",
    justifyContent: "center",
  },
});

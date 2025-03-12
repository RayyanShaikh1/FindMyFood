import { Image, SafeAreaView, StyleSheet, Text } from "react-native";
import { useState } from "react";
import { Header } from "@rneui/themed";
import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function layout() {
  const [query, setQuery] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0F4B65",
    flex: 1,
  },
  searbarContainerStyle: {
    backgroundColor: "white",
  },
  searchbarInputContainerStyle: {
    backgroundColor: "white",
  },
});

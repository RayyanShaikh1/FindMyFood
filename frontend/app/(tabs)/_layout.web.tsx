import { Image, SafeAreaView, StyleSheet, Text } from "react-native";
import { useState } from "react";
import { Input, Button, SearchBar } from "@rneui/themed";

export default function layout() {
  const [query, setQuery] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        containerStyle={styles.searbarContainerStyle}
        inputContainerStyle={styles.searchbarInputContainerStyle}
        placeholder="Search"
        value={query}
        onChangeText={setQuery}
      />
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

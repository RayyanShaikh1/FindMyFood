import { Text, View, StyleSheet, SafeAreaView } from "react-native";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text>Home page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#0F4B65",
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

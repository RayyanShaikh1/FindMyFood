import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Text, View } from "react-native";

export default function TabTwoScreen() {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#e8ecf4",
        flex: 1,
      }}
    >
      <View></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

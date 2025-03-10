import {
  Text,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import React from "react";

interface ButtonProp {
  onPress: () => void;
  title: string;
  textStyles?: StyleProp<TextStyle>;
  containerStyles?: StyleProp<ViewStyle>;
}

export default function Button({
  onPress,
  title,
  textStyles,
  containerStyles,
}: ButtonProp) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.container, containerStyles]}
      onPress={onPress}
    >
      <Text style={[styles.text, textStyles]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#177DA9",
    borderRadius: 8,
  },
  text: {
    color: "white",
    fontSize: 16,
  },
});

import React from "react";
import { TextInput, View, StyleSheet, TextInputProps } from "react-native";

interface TextBoxProps extends TextInputProps {
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

export default function TextBox({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  ...rest
}: TextBoxProps) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#888"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        {...rest}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 350,
    marginVertical: 10,
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: "#fff",
  },
});

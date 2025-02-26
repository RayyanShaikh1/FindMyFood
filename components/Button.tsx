import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

interface ButtonProp {
    onPress: () => void;
    title: string;
    textStyles?: string;
    containerStyles?: string;
}

export default function Button({ onPress, title, textStyles = "", containerStyles = ""}: ButtonProp) {
  return (
    <TouchableOpacity
        activeOpacity = {0.7}
        style = {{ backgroundColor: '#177DA9', width: '90%', borderRadius: 8, minHeight: 62, justifyContent: 'center', alignItems: 'center', marginTop: 25}}
        onPress = {onPress}
    >
        <Text style = {{ color: 'white'}}>
            {title}
        </Text>
    </TouchableOpacity>
  );
}

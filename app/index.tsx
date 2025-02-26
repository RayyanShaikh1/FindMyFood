import { Text, View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';

import Button from '@/components/Button.tsx';
import TextBox from '@/components/TextBox';

export default function Entry() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", }}>
        <StatusBar style="light" />

        <Image 
            source={require('@/assets/images/appicon.png')}
        />
        <Text style={{ textAlign: "center", color: "black", fontWeight: "bold", fontSize: 32 }}> 
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
        />

        <Button 
            onPress={() => router.push('/(tabs)/home')}
            title="Log In"
         /> 

        <View style={{ height: 0.5, backgroundColor: 'grey', width: '90%', marginVertical: 20}} />

        <Text style={{ textAlign: "center", color: "black"}}> 
            Don't have an account? Sign Up.
        </Text>
    </View>
  );
}

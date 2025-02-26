import React, { useState } from "react";
import { View } from "react-native";
import TextBox from "@/components/TextBox";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <View>
      <TextBox
        style={{
          flexDirection: "row",
          height: 45,
          borderColor: "#ccc",
          borderWidth: 1,
          borderRadius: 10,
          paddingHorizontal: 15,
          fontSize: 16,
          backgroundColor: "#fff",
          justifyContent: "center",
        }}
        onChangeText={setSearchQuery}
        value={searchQuery}
        placeholder="Search"
      />
    </View>
  );
};

export default Navbar;

import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { SearchBar } from "@rneui/themed";
//import pages
import Home from './home';  
import Map from './map';    
import Social from './social'; 
import Account from './account'; 

export default function Layout() {
  //keep track of active tab
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState("home");
  //set active tab when tab changes
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Search Bar */}
      <SearchBar
        containerStyle={styles.searchbarContainerStyle}
        inputContainerStyle={styles.searchbarInputContainerStyle}
        placeholder="Search"
        value={query}
        onChangeText={setQuery}
      />

      {/* Tab Bar */}
      <View style={styles.tabBar}>
        <Text
          style={[styles.tab, activeTab === "home" && styles.activeTab]}
          onPress={() => handleTabChange("home")}
        >
          Home
        </Text>
        <Text
          style={[styles.tab, activeTab === "map" && styles.activeTab]}
          onPress={() => handleTabChange("map")}
        >
          Map
        </Text>
        <Text
          style={[styles.tab, activeTab === "social" && styles.activeTab]}
          onPress={() => handleTabChange("social")}
        >
          Social
        </Text>
        <Text
          style={[styles.tab, activeTab === "account" && styles.activeTab]}
          onPress={() => handleTabChange("account")}
        >
          Account
        </Text>
      </View>

      {/* Tab Content */}
      <View style={styles.tabContent}>
        {activeTab === "home" && <Home />}
        {activeTab === "map" && <Map />}
        {activeTab === "social" && <Social />}
        {activeTab === "account" && <Account />}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F0F0F0",
    flex: 1,
    paddingTop: 20,
  },
  searchbarContainerStyle: {
    backgroundColor: "white",
  },
  searchbarInputContainerStyle: {
    backgroundColor: "white",
  },
  tabBar: {
    flexDirection: "row",
    backgroundColor: "#177DA9",
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: "space-around",
  },
  tab: {
    color: "white",
    fontSize: 18,
    padding: 10,
    textAlign: "center",
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#0F4B65",
    fontWeight: "bold",
  },
  tabContent: {
    padding: 20,
  },
});

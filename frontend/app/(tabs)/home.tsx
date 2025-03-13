import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function HalfScreenCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const data = ["Slide 1", "Slideaaa", "Slide 3"];

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slideIndex = Math.round(
      event.nativeEvent.contentOffset.x / screenWidth
    );
    setActiveIndex(slideIndex);
  };

  return (
    <View style={styles.container}>
      <View style={styles.carouselContainer}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={onScroll}
          scrollEventThrottle={16}
        >
          {data.map((item, index) => (
            <View style={styles.slide} key={index}>
              <Text style={styles.text}>{item}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Dots */}
        <View style={styles.dotsContainer}>
          {data.map((_, index) => (
            <View
              key={index}
              style={[styles.dot, { opacity: index === activeIndex ? 1 : 0.3 }]}
            />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F4B65",
    justifyContent: "center",
  },
  carouselContainer: {
    height: screenHeight * 0.3,
    justifyContent: "center",
    marginTop: -400,
    marginBottom: 20,
  },
  slide: {
    width: screenWidth * 0.8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#87CEEB",
    marginHorizontal: screenWidth * 0.1,
    borderRadius: 10,
  },
  text: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
    marginHorizontal: 5,
  },
});

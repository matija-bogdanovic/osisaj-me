import Fire from "@/assets/svg/fire";
import React, { useState } from "react";
import { Dimensions, ScrollView, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface Filtertext {
  text: string;
}

const Filtering: React.FC<Filtertext> = ({ text }) => {
  const windowWidth = Dimensions.get("window").width;
  const [activeIndex, setActiveIndex] = useState(0);
  const handleScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const slideIndex = Math.round(contentOffsetX / windowWidth);
    setActiveIndex(slideIndex);
  };
  return (
    <ScrollView
      horizontal
      pagingEnabled={false}
      style={{ gap: 20, paddingVertical: 32, overflow: "visible" }}
      showsHorizontalScrollIndicator={false}
      onScroll={handleScroll}
      scrollEventThrottle={16}
    >
      <View
        style={{
          backgroundColor: "black",
          paddingHorizontal: 20,
          paddingVertical: 15,
          borderRadius: 100,
          marginRight: 8,
        }}
      >
        <Text style={{ color: "white", fontFamily: "RedHatDisplay-Bold" }}>
          Svi
        </Text>
      </View>
      <LinearGradient
        colors={["#ff0", "#f00"]}
        start={{ x: 0, y: 0 }}
        style={{
          borderRadius: 100,
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 1,
          paddingVertical: 1,
          marginRight: 8,
        }}
        end={{ x: 1, y: 1 }}
      >
        <View
          style={{
            paddingVertical: 15,
            paddingHorizontal: 20,
            gap: 6,
            flexDirection: "row",
            backgroundColor: "white",
            justifyContent: "center",
            borderRadius: 100,
          }}
        >
          <Fire />
          <Text>Najtraženiji</Text>
        </View>
      </LinearGradient>
      <View
        style={{
          borderColor: "#E5E5E5",
          borderWidth: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 20,
          borderRadius: 100,
          backgroundColor: "white",
          marginRight: 8,
        }}
      >
        <Text>{text}</Text>
      </View>
    </ScrollView>
  );
};

export default Filtering;

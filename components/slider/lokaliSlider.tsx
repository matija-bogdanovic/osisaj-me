import Heart from "@/assets/svg/heart";
import Star from "@/assets/svg/star";
import React, { useState } from "react";
import { View, ScrollView, Dimensions, StyleSheet, Text } from "react-native";
import { stylesIndex } from "../pagesStyle";

interface CarouselProps {
  data: string[];
}

const LokaliCarousel: React.FC<CarouselProps> = ({ data = [] }) => {
  const windowWidth = Dimensions.get("window").width;
  const [activeIndex, setActiveIndex] = useState(0);
  const rating = 0;
  const distance = "1.8";
  const name = "Lobotomy";
  const state = "OTVORENO";
  const time = "10:00 - 20:00";

  const handleScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const slideIndex = Math.round(contentOffsetX / windowWidth);
    setActiveIndex(slideIndex);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled={false}
        style={styles.scrollview}
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {data.map((item, index) => (
          <View
            key={index}
            style={[
              styles.slide,
              { marginLeft: index === 0 ? 0 : 16, width: 200 },
            ]}
          >
            <View
              style={{
                position: "absolute",
                top: 10,
                left: 10,
                paddingTop: 5,
                paddingLeft: 7,
                paddingRight: 7,
                paddingBottom: 5,
                backgroundColor: "#131617",
                flex: 1,
                flexDirection: "row",
                gap: 4,
                alignItems: "center",
              }}
            >
              <Star />
              <Text style={{ color: "white" }}>{rating}</Text>
            </View>
            <View
              style={{
                backgroundColor: "black",
                position: "absolute",
                top: 10,
                right: 10,
              }}
            >
              <Heart />
            </View>
            <View style={{ flex: 2 }}></View>
            <View
              style={{
                flex: 1.1,
                padding: 10,
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <View
                style={{
                  flex: 1,
                  width: "100%",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Text style={stylesIndex.cardTextLook}>{state}</Text>
                <Text style={stylesIndex.cardTimeLook}> | {time}</Text>
              </View>
              <View style={{ flexDirection: "column", gap: 8 }}>
                <Text
                  style={{ color: "black", fontFamily: "RedHatDisplay-Bold" }}
                >
                  {name}
                </Text>
                <Text style={{ color: "#5B6570" }}>{distance}km</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "visible",
  },
  scrollview: {
    borderRadius: 8,
    overflow: "visible",
    flex: 1,
    flexDirection: "row",
  },
  slide: {
    height: 200,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "flex-start",
    borderRadius: 8,
  },
  slideContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  slideText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default LokaliCarousel;

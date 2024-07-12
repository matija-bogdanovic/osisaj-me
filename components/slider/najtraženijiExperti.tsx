import React, { useState } from "react";
import * as Font from "expo-font";
import { SplashScreen } from "expo-router";
import { useEffect } from "react";
import {
  View,
  ScrollView,
  Dimensions,
  StyleSheet,
  Image,
  Text,
} from "react-native";

interface CarouselProps {
  data: string[];
}

const NajtraženijiExpertiSlider: React.FC<CarouselProps> = ({ data = [] }) => {
  const [fontsLoaded] = Font.useFonts({
    "RedHatDisplay-Regular": require("@/assets/fonts/RedHatDisplay-Regular.ttf"),
    "RedHatDisplay-Bold": require("@/assets/fonts/RedHatDisplay-Bold.ttf"),
    "RedHatDisplay-Medium": require("@/assets/fonts/RedHatDisplay-Medium.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);
  const category = "PRO";
  const nameOfLocal = "Lobotomy";
  const nameOfBarber = "Vuk Matic";
  const windowWidth = Dimensions.get("window").width;
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event: any) => {
    // Calculate active index based on current scroll position
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const slideIndex = Math.round(contentOffsetX / windowWidth);
    setActiveIndex(slideIndex);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled={false} // Disable paging to allow free-flowing scroll
        style={styles.scrollview}
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {data.map((item, index) => (
          <View
            key={index}
            style={[styles.slide, { marginLeft: index === 0 ? 0 : 16 }]}
          >
            <View style={styles.slideContent}>
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{ width: 80, height: 80 }}
                  source={require("@/assets/images/placeholder_image.png")}
                />
                <View
                  style={{
                    backgroundColor: "#21AB8A",
                    position: "absolute",
                    bottom: -10,
                    padding: 4,
                    borderRadius: 2,
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      fontFamily: "RedHatDisplay-Bold",
                    }}
                  >
                    {category}
                  </Text>
                </View>
              </View>
              <View style={{ gap: 4, alignItems: "center" }}>
                <Text
                  style={{ fontFamily: "RedHatDisplay-Bold", fontSize: 14 }}
                >
                  {nameOfBarber}
                </Text>
                <Text
                  style={{
                    color: "#5B6570",
                    fontSize: 12,
                    fontFamily: "RedHatDisplay-Regular",
                  }}
                >
                  {nameOfLocal}
                </Text>
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
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  slideContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 26
  },
  slideText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default NajtraženijiExpertiSlider;
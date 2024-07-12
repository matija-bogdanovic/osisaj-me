import React, { useState } from "react";
import {
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

interface CarouselProps {
  data: string[];
}

const Carousel: React.FC<CarouselProps> = ({
  data = [],
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const windowWidth = Dimensions.get("window").width;

  const handleScroll = (event: any) => {
    const slideIndex = Math.ceil(
      event.nativeEvent.contentOffset.x / windowWidth
    );
    setActiveIndex(slideIndex);
  };

  const handleDotPress = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <View>
      <ScrollView
        horizontal
        pagingEnabled
        style={{borderRadius: 8}}
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {data.map((item, index) => (
          <View key={index} style={[styles.slide, { width: windowWidth }]}>
          </View>
        ))}
      </ScrollView>
      <View style={styles.dotContainer}>
        {data.map((_, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleDotPress(index)}
            style={[
              styles.dot,
              { backgroundColor: index === activeIndex ? "white" : "rgba(255,255,255,0.4)" },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    height: 200,
    backgroundColor: "black",
    color: "white"
  },
  dotContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 10,
    position: "absolute",
    bottom: 20,
    left: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});

export default Carousel;

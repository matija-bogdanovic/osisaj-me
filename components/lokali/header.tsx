/* Trebalo bi da se fiksa strelica sto se developmenta tice, strelica koja treba da se 
// pojavljuje nakon sto se scrolluje na dole :thumbsup:
*/

import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

const Header: React.FC = () => {
  const [showButton, setShowButton] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null); 

  // Function to handle scrolling
  const handleScroll = (event: any) => {
    const currentOffset = event.nativeEvent.contentOffset.y;
    setShowButton(currentOffset > 100);
  };
  const scrollToTop = () => {
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  };

  return (
    <View style={{ position: "absolute", top: 0, left: 0, right: 0 }}>
      <ScrollView
        ref={scrollViewRef}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <Text
          style={{
            color: "#131617",
            textAlign: "center",
            fontFamily: "RedHatDisplay-Bold",
            fontSize: 20,
            fontStyle: "normal",
            fontWeight: "700",
            paddingVertical: 32,
          }}
        >
          Lokali
        </Text>
      </ScrollView>

      {showButton && (
        <TouchableOpacity style={styles.button} onPress={scrollToTop}>
          <Text style={styles.buttonText}>Back to Top</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#21AB8A",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Header;

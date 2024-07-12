import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Title() {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "RedHatDisplay-Bold", fontSize: 18 }}>
        Svi - Lokali
      </Text>
      <Text style={{ color: "#44484D", fontFamily: "RedHatDisplay-Regular" }}>Sort</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

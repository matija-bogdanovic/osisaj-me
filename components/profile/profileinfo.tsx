import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Lokacija from "@/assets/svg/lokacija";
import Shield from "@/assets/svg/shield";

export default function Profileinfo() {
  const location = "Vozda Karadjordja 24, Nis";
  const number = "+123456790";
  const name = "Stefan Rakic";

  return (
    <View style={styles.wrapper}>
      <View style={styles.pfp} />
      <View style={{ marginBottom: 16 }}>
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.locationwrapper}>
        <Lokacija />
        <Text style={styles.location}>{location}</Text>
      </View>
      <View style={styles.numberwrapper}>
        <Shield />
        <Text style={styles.number}>{number}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  numberwrapper: { flexDirection: "row", justifyContent: "center", gap: 8 },
  wrapper: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  locationwrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginBottom: 24,
  },
  pfp: {
    marginBottom: 24,
    width: 140,
    height: 140,
    backgroundColor: "black",
    borderRadius: 100,
  },
  name: {
    fontFamily: "RedHatDisplay-Bold",
    fontSize: 24,
  },
  location: {
    fontFamily: "RedHatDisplay-Regular",
    color: "#5B6570",
    fontSize: 16,
  },
  number: {
    fontFamily: "RedHatDisplay-Regular",
    fontWeight: 500,
    color: "#131617",
  },
});

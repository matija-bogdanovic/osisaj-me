import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import Signout from "@/assets/svg/signout";
import Arrow from "@/assets/svg/arrow";

export default function Logoutbtn() {
  return (
    <View>
      <Pressable style={styles.wrapper}>
        <View style={styles.button}>
          <Signout />
          <Text style={{ fontFamily: "RedHatDisplay-Medium" }}>Odjavi se</Text>
        </View>
        <Arrow />
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
  },
  wrapper: {
    backgroundColor: "#E5E5E5",
    flexDirection: "row",
    padding: 16,
    justifyContent: "space-between",
    alignItems: "center",
  },
});

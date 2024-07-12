import { View, Text, Pressable, StyleSheet, Button } from "react-native";
import React from "react";
import Calender from "@/assets/svg/calender";
import Arrow from "@/assets/svg/arrow";
import Heart_profile from "@/assets/svg/heart(profile)";
import Sort from "@/assets/svg/sort";
import { Link } from "expo-router";

export default function Profileoptions() {
  return (
    <>
      <View style={{ gap: 12 }}>
        <Link href="/profileroutes/rezervacije">
          <View style={styles.option}>
            <View style={{flexDirection: "row", alignItems: "center", gap: 12}}>
              <Calender />
              <Text style={{ fontFamily: "RedHatDisplay-Bold" }}>
                Moje Rezervacije
              </Text>
            </View>
            <Arrow />
          </View>
        </Link>
        <Pressable style={styles.option}>
          <View style={styles.reservations}>
            <Heart_profile />
            <Text style={{ fontFamily: "RedHatDisplay-Bold" }}>
              Moji favoriti
            </Text>
          </View>
          <Arrow />
        </Pressable>
        <Pressable style={styles.option}>
          <View style={styles.reservations}>
            <Sort />
            <Text style={{ fontFamily: "RedHatDisplay-Bold" }}>
              Podesavanja
            </Text>
          </View>
          <Arrow />
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  option: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "white",
    width: "100%",
  },
  reservations: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
});

import { View, Text, StyleSheet, Pressable, Button } from "react-native";
import React from "react";
import Bell from "@/assets/svg/bell";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Link, useNavigation } from "expo-router";

export default function Rezervacije () {
  const inst = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <View
      style={[
        styles.container,
        { paddingTop: inst.top, paddingHorizontal: 20, },
      ]}
    >
      <View style={styles.header}>
        <Link href="profile">
        <View style={styles.closeButton}>
          <Text style={styles.closeButtonText}>X</Text>
        </View>
        </Link>
        <Text style={styles.title}>Uredi profil</Text>
        <Pressable style={styles.bellButton}>
          <Bell />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  closeButton: {
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
    height: 48,
    width: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  closeButtonText: {
    fontFamily: "RedHatDisplay-Bold",
  },
  title: {
    fontFamily: "RedHatDisplay-Bold",
    fontSize: 20,
    textAlign: "center",
  },
  bellButton: {
    backgroundColor: "#F6F6F6",
    height: 48,
    width: 48,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});

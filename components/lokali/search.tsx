import Pretraga from "@/assets/svg/pretraga";
import Sort from "@/assets/svg/sort";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const Search = () => {
  const [number, onChangeNumber] = useState("");

  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: "center",
          gap: 12,
          flexDirection: "row",
          flex: 1,
          padding: 16,
          borderRadius: 4,
          backgroundColor: "white",
        }}
      >
        <Pretraga color={"black"} size={20} />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Pretraži"
          placeholderTextColor="#5B6570"
        />
      </View>
      <View
        style={{
          padding: 16,
          backgroundColor: "white",
          alignItems: "center",
          borderRadius: 4,
          justifyContent: "center",
        }}
      >
        <Sort />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontFamily: "RedHatDisplay-Medium",
    flex: 1,
    height: "auto",
    width: "100%",
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    gap: 12,
    marginTop: 100,
    flexDirection: "row",
    alignItems: "center",
    overflow: "visible",
  },
});

export default Search;

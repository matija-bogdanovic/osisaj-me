import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Pen } from "@/assets/svg/pen";

type SetType = {
  name: string;
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
};

export const Input: React.FC<SetType> = ({ name, state, setState }) => {
  return (
    <View>
      <Text style={styles.label}>{name}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          value={state}
          onChangeText={setState}
          style={styles.input}
          placeholderTextColor="#5B6570"
        />
        <View style={{position: "absolute", right: 16, top: 16, bottom: 16}}>
          <Pen stroke={"#131617"} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontFamily: "RedHatDisplay-Medium",
    color: "#5B6570",
    marginBottom: 8,
  },
  inputContainer: {
    padding: 16,
    backgroundColor: "#f6f6f6",
    borderRadius: 4,
  },
  input: {
    fontFamily: "RedHatDisplay-Medium",
    fontSize: 16,
    color: "#5B6570",
  },
});

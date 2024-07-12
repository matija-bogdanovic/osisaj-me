import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { Pen } from "@/assets/svg/pen";

type SetType = {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
};

export const InputNumber: React.FC<SetType> = ({ state, setState }) => {
  return (
    <View>
      <Text style={styles.label}>Broj telefona</Text>
      <View style={styles.inputContainer}>
        <TextInput
          keyboardType="numeric"
          value={state}
          onChangeText={setState}
          style={styles.input}
          placeholderTextColor="#5B6570"
        />
        <View style={{position: "absolute", top: 16, right: 16, bottom: 16}}>
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

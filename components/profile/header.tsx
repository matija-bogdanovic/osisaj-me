import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import HeaderPopup from "./popup/urediprofil"; // Ensure the correct path to HeaderPopup
import { Pen } from "@/assets/svg/pen";

export default function Header() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{width: 48}}></View>
        <Text
          style={{
            fontFamily: "RedHatDisplay-Bold",
            fontSize: 20,
            textAlign: "center",
            paddingVertical: 32,
          }}
        >
          Moj Profil
        </Text>
        <Pressable
          style={{
            backgroundColor: "black",
            width: 48,
            height: 48,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 100,
          }}
          onPress={() => setVisible(true)}
        >
          <Pen stroke="white" />
        </Pressable>
      </View>
      <HeaderPopup visible={visible} setVisible={setVisible} />
    </>
  );
}

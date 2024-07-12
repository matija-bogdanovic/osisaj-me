import React from "react";
import { View } from "react-native";
import PopularneKategorije_Kartica from "../popularneKategorije/popularneKategorije(kartica)";
import { TitlZaKarte } from "./titlZaKarte";

function PopularneKategorije() {
  return (
    <View style={{ flex: 1, flexDirection: "column", gap: 20 }}>
      <TitlZaKarte title={"Popularne kategorije"} vidisve={"Vidi Sve"} />
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 20,
        }}
      >
        <PopularneKategorije_Kartica />
        <PopularneKategorije_Kartica />
        <PopularneKategorije_Kartica />
        <PopularneKategorije_Kartica />
      </View>
    </View>
  );
}

export default PopularneKategorije;

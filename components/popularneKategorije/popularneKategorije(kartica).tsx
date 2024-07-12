import React from "react";
import { Text, View } from "react-native";
import { stylesIndex } from "../pagesStyle";
import SisanjeKose from "../../assets/svg/šišanje_kose";

function PopularneKategorije_Kartica() {
  const title = "Šišanje Kose";
  return (
    <View style={stylesIndex.kartice}>
      <View style={stylesIndex.svgWrapperZaKartice}>
        <SisanjeKose />
      </View>
      <Text style={{ textAlign: "center", fontFamily: "RedHatDisplay-Medium" }}>
        {title}
      </Text>
    </View>
  );
}

export default PopularneKategorije_Kartica;

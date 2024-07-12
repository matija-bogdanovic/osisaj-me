import React from "react";
import { Text, View } from "react-native";
import { stylesIndex } from "../pagesStyle";
import Lokacija from "../../assets/svg/lokacija";

function Greeting() {
  const user = "user";
  const location = "Vožda Karađorđa 45, Niš";
  return (
    <View>
      <Text style={stylesIndex.greetingText}>
        Zdravo, <Text style={{ fontWeight: "bold" }}>{user}</Text>! 👋
      </Text>
      <View>
        <View style={stylesIndex.locationWrapper}>
          <Lokacija />
          <Text style={stylesIndex.locationText}>{location}</Text>
        </View>
      </View>
    </View>
  );
}

export default Greeting;

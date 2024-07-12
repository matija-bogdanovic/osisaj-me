import React from "react";
import { Image, View } from "react-native";
import { stylesIndex } from "../pagesStyle";
import Bell from "@/assets/svg/bell";

function Header() {
  return (
    <View style={stylesIndex.wrapper}>
      <View>
        <Image source={require("@/assets/images/placeholder_image.png")} />
        <View style={stylesIndex.circleWrapper}>
          <View style={stylesIndex.circleActive}></View>
        </View>
      </View>
      <Image source={require("@/assets/images/osisajme-logo.png")} />
      <View style={stylesIndex.notification}>
        <View style={{ position: "relative" }}>
          <Bell />
          <View
            style={{
              backgroundColor: "#E63D26",
              borderWidth: 1,
              borderRadius: 100,
              position: "absolute",
              borderColor: "white",
              width: 6,
              height: 6,
              top: 0,
              right: 0,
            }}
          />
        </View>
      </View>
    </View>
  );
}

export default Header;

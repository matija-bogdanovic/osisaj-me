import Heart from "@/assets/svg/heart";
import Star from "@/assets/svg/star";
import React from "react";
import { Button, Image, ImageBackground, Text, View } from "react-native";
import { stylesIndex } from "../pagesStyle";

function LokaliuBlizini() {
  const review = "0";
  const state = "otvoreno";
  const time = "10:00-20:00h";
  const name = "Lobotomy";
  const place = "Vožda Karađorđa 45, Niš";
  const distance = "1.8";
  return (
    <View>
      <View style={{ borderRadius: 8, backgroundColor: "white" }}>
        <View
          style={{
            backgroundColor: "black",
            flexDirection: "row",
            gap: 6,
            position: "absolute",
            top: 14,
            left: 14,
            borderRadius: 4,
            paddingTop: 5,
            paddingBottom: 5,
            paddingRight: 7,
            paddingLeft: 7,
            zIndex: 2,
          }}
        >
          <Star />
          <Text style={{ color: "white" }}>{review}</Text>
        </View>
        <View style={{ position: "absolute", zIndex: 2, top: 14, right: 14 }}>
          <Heart />
        </View>
        <ImageBackground style={{ flex: 3, height: 174 }}>
          <Image source={require("@/assets/images/placeholder_image.png")} />
        </ImageBackground>
        <View style={{ padding: 14 }}>
          <View
            style={{
              flex: 1,
              width: "100%",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Text style={stylesIndex.cardTextLook}>{state}</Text>
            <Text style={stylesIndex.cardTimeLook}> | {time}</Text>
          </View>
          <Text style={{ color: "black", fontFamily: "RedHatDisplay-Bold" }}>
            {name}
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text>{place}</Text>
            </View>
            <View style={{ flexDirection: "column", gap: 8 }}>
              <Text style={{ color: "#5B6570" }}>{distance}km</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default LokaliuBlizini;

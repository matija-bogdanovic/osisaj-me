import Carousel from "@/components/slider/ComponentSlider";
import React, { useCallback, useState } from "react";
import { RefreshControl, ScrollView, StatusBar, View } from "react-native";
import { stylesIndex } from "@/components/pagesStyle";
import Header from "@/components/index/header";
import Greeting from "@/components/index/greeting";
import PopularneKategorije from "@/components/index/popularneKategorije";
import LokaliCarousel from "@/components/slider/lokaliSlider";
import NajtraženijiExpertiSlider from "@/components/slider/najtraženijiExperti";
import { TitlZaKarte } from "@/components/index/titlZaKarte";
import LokaliuBlizini from "@/components/index/lokaliuBlizini";
import { useSafeAreaInsets } from "react-native-safe-area-context";
function Index() {
  const insets = useSafeAreaInsets();
  return (
    <ScrollView
      style={[stylesIndex.container, {paddingTop: insets.top}]}
    >
      <Header />
      <Greeting />
      <View style={stylesIndex.greetingWrapper}>
        <View style={stylesIndex.contentcontainer}>
          <Carousel data={["reklama", "reklama1", "reklama2"]} />
          <PopularneKategorije />
          <View>
            <TitlZaKarte title={"Popularni lokali"} vidisve={"Vidi Sve"} />
            <LokaliCarousel data={["data1", "data2", "data3"]} />
          </View>
          <View>
            <TitlZaKarte title={"Najtrazeniji experti"} vidisve={"Vidi Sve"} />
            <NajtraženijiExpertiSlider data={["data1", "data2", "data3"]} />
          </View>
          <View>
            <TitlZaKarte
              title={"Lokali u tvojoj blizini"}
              vidisve={"Vidi Sve"}
            />
            <LokaliuBlizini/>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default Index;
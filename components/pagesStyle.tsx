import { StyleSheet } from "react-native";
import * as Font from 'expo-font'
import { SplashScreen } from "expo-router";
import { useEffect } from "react";

export default function indexStyle () {
  const [fontsLoaded] = Font.useFonts({
    "RedHatDisplay-Regular": require("@/assets/fonts/RedHatDisplay-Regular.ttf"),
    "RedHatDisplay-Bold": require("@/assets/fonts/RedHatDisplay-Bold.ttf"),
    "RedHatDisplay-Medium": require("@/assets/fonts/RedHatDisplay-Medium.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);
  return (
    <></>
  )
}
export const stylesIndex = StyleSheet.create({
  header: {
    fontFamily: "RedHatDisplay-Bold",
    fontSize: 18,
  },
  headerVidiSve: {
    fontFamily: "RedHatDisplay-Medium",
    color: "#44484D",
    fontSize: 16,
  },
  contentcontainer: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 32,
    gap: 32,
  },
  kartice: {
    gap: 10,
    backgroundColor: "#fff",
    padding: 12,
    maxWidth: 80,
    alignItems: "center",
    flex: 1,
    borderRadius: 8,
  },
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  wrapper: {
    flexDirection: "row",
    position: "relative",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  headerKategorija: {
    fontWeight: "bold",
    fontFamily: "RedHatDisplay-Bold",
    fontSize: 18,
  },
  image: {
    width: 48,
    height: 48,
  },
  notification: {
    position: "relative",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    width: 48,
    height: 48,
  },
  circleWrapper: {
    padding: 2,
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "white",
    borderRadius: 100,
  },
  circleActive: {
    width: 6,
    height: 6,
    backgroundColor: "#49EFC8",
    borderRadius: 100,
  },
  greetingWrapper: {
    marginTop: 20,
  },
  greetingText: {
    fontSize: 24,
  },
  userName: {
    fontWeight: "bold",
  },
  locationWrapper: {
    gap: 4,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  svgWrapperZaKartice: {
    alignItems: "center",
    backgroundColor: "#131617",
    borderRadius: 100,
    padding: 10,
    borderWidth: 4,
    borderColor: "#E5E5E5",
  },
  cardTextLook: {
    fontSize: 10,
    textTransform: "uppercase",
    fontFamily: "RedHatDisplay-Regular",
    fontWeight: "400",
    color: "#21AB8A",
  },
  cardTimeLook: {
    color: "#5B6570",
    fontSize: 10,
    fontFamily: "RedHatDisplay-Regular",
    fontWeight: "400",
  },
  locationText: {
    fontSize: 16,
    fontFamily: "RedHatDisplay-Regular",
    color: "#5B6570",
  },
});

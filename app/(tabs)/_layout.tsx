import React, { useState } from "react";
import { Tabs } from "expo-router";
import {
  StatusBar,
  StatusBarStyle,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Profil from "@/assets/svg/profil";
import Mapa from "@/assets/svg/mapa";
import Index from "@/assets/svg";
import Lokali from "@/assets/svg/lokali";
import Pretraga from "@/assets/svg/pretraga";

const STYLES = ["default", "dark-content", "light-content"] as const;

export default function TabLayout() {
  const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>(
    STYLES[1]
  );
  return (
    <View style={[styles.container]}>
      <StatusBar backgroundColor="white" barStyle={statusBarStyle} />
      <Tabs
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let IconComponent;

            switch (route.name) {
              case "index":
                IconComponent = <Index color={color} size={size} width={1.6} />;
                break;
              case "lokali":
                IconComponent = <Lokali color={color} size={size} />;
                break;
              case "mapa":
                IconComponent = <Mapa color={color} size={size} />;
                break;
              case "pretraga":
                IconComponent = <Pretraga color={color} size={size} />;
                break;
              case "profile":
                IconComponent = <Profil color={color} size={size} />;
                break;
              default:
                IconComponent = <Index color={color} size={size} width={1.6} />;
            }

            return IconComponent;
          },
          tabBarLabelStyle: {
            fontWeight: "bold",
            color: "black",
            fontSize: 10,
          },
          tabBarInactiveTintColor: "black",
          tabBarActiveTintColor: "#21AB8A",
          headerShown: false,
          tabBarLabel: ({ focused }) => {
            let label;

            switch (route.name) {
              case "index":
                label = "Istraži";
                break;
              case "lokali":
                label = "Lokali";
                break;
              case "mapa":
                label = "Mapa";
                break;
              case "pretraga":
                label = "Pretraga";
                break;
              case "profile":
                case "profileroutes":
                label = "Profile";
                break;
              default:
                label =
                  route.name.charAt(0).toUpperCase() + route.name.slice(1);
            }
            return (
              <Text
                style={{
                  color: focused ? "black" : "black",
                  fontWeight: focused ? "bold" : "normal",
                  fontSize: 10,
                }}
              >
                {label}
              </Text>
            );
          },
        })}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Istraži",
          }}
        />
        <Tabs.Screen
          name="lokali"
          options={{
            title: "Lokali",
          }}
        />
        <Tabs.Screen
          name="mapa"
          options={{
            title: "Mapa",
          }}
        />
        <Tabs.Screen
          name="pretraga"
          options={{
            title: "Pretraga",
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
          }}
        />
        <Tabs.Screen name="profileroutes" options={{ href: null }}/>
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

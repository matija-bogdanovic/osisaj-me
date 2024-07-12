import Header from "@/components/profile/header";
import Settings from "@/components/profile/settings";
import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function Profile() {
  const insets = useSafeAreaInsets();
  return (
    <>
      <View
        style={[
          {
            paddingHorizontal: 20,
            paddingBottom: 20,
            paddingTop: insets.top,
            flex: 1,
          },
        ]}
      >
        <Header />
        <Settings/>
      </View>
    </>
  );
}

export default Profile;

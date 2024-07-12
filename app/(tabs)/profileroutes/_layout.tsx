import React, { useLayoutEffect } from "react";
import Rezervacije from "./rezervacije";
import { Stack, useNavigation } from "expo-router";


function Layout() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });
  return (
    <Stack>
      <Stack.Screen
        name="rezervacije"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}

export default Layout;
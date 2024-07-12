import { View, Text } from 'react-native'
import React from 'react'
import Profileinfo from './profileinfo';
import Profileoptions from './profileoptions';
import Logoutbtn from './logoutbtn';

export default function Settings() {
  return (
    <View
      style={{
        justifyContent: "space-between",
        flex: 1,
      }}
    >
      <Profileinfo />
      <Profileoptions />
      <Logoutbtn />
    </View>
  );
}
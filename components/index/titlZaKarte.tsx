import React from 'react'
import { stylesIndex } from '../pagesStyle';
import { Text, View } from 'react-native';

interface Specs {
   title: string
   vidisve: string
}

export const TitlZaKarte:React.FC <Specs> = ({title,vidisve}) => {
  return (
    <View style={stylesIndex.wrapper}>
      <Text style={stylesIndex.headerKategorija}>{title}</Text>
      <Text style={stylesIndex.headerVidiSve}>{vidisve} &gt;</Text>
    </View>
  );
}
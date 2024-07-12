import LokaliuBlizini from "@/components/index/lokaliuBlizini";
import { TitlZaKarte } from "@/components/index/titlZaKarte";
import Title from "@/components/lokali/Title";
import Filtering from "@/components/lokali/filtering";
import Header from "@/components/lokali/header";
import Search from "@/components/lokali/search";
import { ScrollView, StyleSheet} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Lokali() {
  const insets = useSafeAreaInsets();
  return (
    <ScrollView style={[styles.container, { paddingTop: insets.top }]}>
      <Header />
      <Search />
      <Filtering text="Najpovoljniji" />
      <Title />
      <LokaliuBlizini />
      <LokaliuBlizini />
      <LokaliuBlizini />
      <LokaliuBlizini />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Bell from "@/assets/svg/bell";
import { Input } from "@/components/input";
import { InputNumber } from "@/components/inputnumber";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useFocusEffect } from "expo-router";

type PopupVisibility = {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const HeaderPopup: React.FC<PopupVisibility> = ({ visible, setVisible }) => {
  const insets = useSafeAreaInsets();
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");

  useFocusEffect(
    useCallback(() => {
      return () => setVisible(false);
    }, [])
  );

  if (!visible) {
    return null;
  }

  return (
    <View
      style={[
        {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
          flex: 1,
          paddingTop: insets.top,
          backgroundColor: "white",
        },
      ]}
    >
      <KeyboardAvoidingView
        style={styles.modalBackground}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 50 : 0}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.popupContainer}>
            <View style={styles.header}>
              <Pressable
                style={styles.closeButton}
                onPress={() => setVisible(false)}
              >
                <Text style={styles.closeButtonText}>X</Text>
              </Pressable>
              <Text style={styles.title}>Uredi profil</Text>
              <Pressable
                style={styles.bellButton}
                onPress={() => setVisible(true)}
              >
                <Bell />
              </Pressable>
            </View>
            <View style={styles.profilePicContainer}>
              <View style={styles.profilePic}></View>
            </View>
            <View style={styles.inputContainer}>
              <Input name={"Ime i prezime"} state={name} setState={setName} />
              <Input name={"Kontakt email"} state={mail} setState={setMail} />
              <InputNumber state={number} setState={setNumber} />
              <Input name={"Adresa"} state={address} setState={setAddress} />
            </View>
            <View style={styles.buttonRow}>
              <Pressable style={styles.discardButton}>
                <Text style={styles.discardButtonText}>Odbaci</Text>
              </Pressable>
              <Pressable style={styles.saveButton}>
                <Text style={styles.saveButtonText}>Sačuvaj Izmene</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: "white",
  },
  popupContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    marginVertical: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
  scrollContainer: {
    flexGrow: 1,
    height: "100%",
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  closeButton: {
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
    height: 48,
    width: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  closeButtonText: {
    fontFamily: "RedHatDisplay-Bold",
  },
  title: {
    fontFamily: "RedHatDisplay-Bold",
    fontSize: 20,
    textAlign: "center",
  },
  bellButton: {
    backgroundColor: "#F6F6F6",
    height: 48,
    width: 48,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  profilePicContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 36,
    paddingBottom: 24,
  },
  profilePic: {
    height: 96,
    width: 96,
    backgroundColor: "black",
    borderRadius: 100,
  },
  inputContainer: {
    flex: 1,
    gap: 20,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 14,
    marginTop: 20,
  },
  discardButton: {
    backgroundColor: "#eee",
    flex: 1,
    paddingVertical: 16,
    borderRadius: 4,
  },
  discardButtonText: {
    fontFamily: "RedHatDisplay-Bold",
    textAlign: "center",
  },
  saveButton: {
    backgroundColor: "#131617",
    flex: 1,
    paddingVertical: 16,
    borderRadius: 4,
  },
  saveButtonText: {
    fontFamily: "RedHatDisplay-Bold",
    color: "white",
    textAlign: "center",
  },
});

export default HeaderPopup;

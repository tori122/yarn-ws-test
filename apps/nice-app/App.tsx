import { greeting, getIntroduce, Button } from "nice-package";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Alert, Text, View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Nice App</Text>
      <Text>{greeting}</Text>
      <Text>{getIntroduce("Nice App")}</Text>
      <Button label="나이스 버튼" onPress={() => Alert.alert("나이스~~")} />
      {/* <RedBox /> */}
      <StatusBar style="auto" />
    </View>
  );
}

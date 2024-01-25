import { greeting, getIntroduce, Button, TextInput } from "nice-package";
import { StatusBar } from "expo-status-bar";
import React, { useCallback, useMemo, useRef } from "react";
import { Alert, Text, View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <StatusBar style="auto" />
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Cool App</Text>
      <Text>{greeting}</Text>
      <Text>{getIntroduce("Cool App")}</Text>
      <Button label="쿨 버튼" onPress={() => Alert.alert("쿨~~")} />
      <TextInput placeholder="호이이이이" />
    </View>
  );
}

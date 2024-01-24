import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface ButtonProps {
  onPress: () => void;
  label: string;
}
export const Button = (props: ButtonProps) => {
  const { onPress, label } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderWidth: 1,
        paddingHorizontal: 12,
        paddingVertical: 6,
      }}
    >
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

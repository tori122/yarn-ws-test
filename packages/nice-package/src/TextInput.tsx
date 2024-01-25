import React from "react";
import { TextInput as RNTextInput } from "react-native";

export interface TextInputProps {
  value?: string;
  onChangeText?: (text: string) => void;
  onSubmitEditing?: () => void;
  placeholder?: string;
}

export const TextInput = (props: TextInputProps) => {
  const { value, onChangeText, onSubmitEditing, placeholder } = props;
  return (
    <RNTextInput
      style={{ borderWidth: 1, padding: 4 }}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      onSubmitEditing={onSubmitEditing}
      placeholderTextColor={"red"}
    />
  );
};

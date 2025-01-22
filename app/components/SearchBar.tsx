import { View, Text, TextInput } from "react-native";
import React from "react";

export default function SearchBar() {
  return (
    <View className="p-4">
      <TextInput
        placeholder="I want to eat ..."
        className="border border-gray-300 rounded-md px-2 py-3 text-md"
      />
    </View>
  );
}

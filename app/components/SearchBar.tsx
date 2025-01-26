import { View, TextInput } from "react-native";
import React from "react";

export default function SearchBar() {
  return (
    <View className="p-4">
      <TextInput
        placeholder="I want to eat ..."
        className="border border-gray-300 rounded-md p-4 text-2xl font-bold"
      />
    </View>
  );
}

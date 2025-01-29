import React from "react";
import { View, FlatList, Text } from "react-native";

export default function ProductList() {
  return (
    <View className="h-full p-2">
      <View className="mt-5 px-4">
        <Text className="text-2xl font-semibold border-b-2">Your Products</Text>
      </View>
    </View>
  );
}

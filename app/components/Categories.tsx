import { View, Text, ScrollView } from "react-native";
import React from "react";

export default function Categories() {
  return (
    <View className="p-4">
      <Text className="mb-2">Categories</Text>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        <Text className="w-28 p-4 text-center border-black border-2 rounded-lg">
          Soup
        </Text>
        <Text className="w-28 p-4 text-center border-black border-2 rounded-lg">
          Soup
        </Text>
        <Text className="w-28 p-4 text-center border-black border-2 rounded-lg">
          Soup
        </Text>
        <Text className="w-28 p-4 text-center border-black border-2 rounded-lg">
          Soup
        </Text>
        <Text className="w-28 p-4 text-center border-black border-2 rounded-lg">
          Soup
        </Text>
        <Text className="w-28 p-4 text-center border-black border-2 rounded-lg">
          Soup
        </Text>
      </ScrollView>
    </View>
  );
}

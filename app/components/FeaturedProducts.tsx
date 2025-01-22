import { View, Text, ScrollView, Image } from "react-native";
import React from "react";

export default function FeaturedProducts() {
  return (
    <View className="p-4">
      <Text className="text-xl font-bold mb-2">Featured Products</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Text className="w-28 h-16 p-2 text-center border-black border-2 rounded-lg">
          Product Card here
        </Text>
        <Text className="w-28 h-16 p-2 text-center border-black border-2 rounded-lg">
          Product Card here
        </Text>
        <Text className="w-28 h-16 p-2 text-center border-black border-2 rounded-lg">
          Product Card here
        </Text>
        <Text className="w-28 h-16 p-2 text-center border-black border-2 rounded-lg">
          Product Card here
        </Text>
        <Text className="w-28 h-16 p-2 text-center border-black border-2 rounded-lg">
          Product Card here
        </Text>
      </ScrollView>
    </View>
  );
}

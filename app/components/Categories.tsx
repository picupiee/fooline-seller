import { View, Text, ScrollView, Pressable } from "react-native";
import React from "react";
import { categories } from "../data/categories";

export default function Categories() {
  return (
    <View className="p-4">
      <Text className="text-xl font-bold mb-2">Categories</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="mt-2"
      >
        {categories.map((category) => (
          <Pressable
            key={category.catId}
            className="bg-gray-200 rounded-lg mr-2 p-4"
            onPress={() =>
              console.log("Category", category.catName, "is pressed")
            }
          >
            <Text className="text-center font-semibold">
              {category.catName}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

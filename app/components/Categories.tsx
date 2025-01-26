import { View, Text, ScrollView, Pressable } from "react-native";
import React from "react";
import { categories } from "../data/categories";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getCategoryIcon } from "../utils/iconMapping";

export default function Categories() {
  return (
    <View className="p-4">
      <Text className="text-xl font-bold mb-2">Categories</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="mt-2"
      >
        {categories.map((category) => {
          const iconsName = getCategoryIcon(category);
          return (
            <Pressable
              key={category.catId}
              className="bg-gray-200 rounded-lg mr-2 p-2 w-28 flex items-center justify-center"
              onPress={() =>
                console.log("Category", category.catName, "is pressed")
              }
            >
              <MaterialCommunityIcons
                name={iconsName}
                size={20}
                color="black"
                className="mb-2 mt-2"
              />
              <Text className="font-semibold text-sm">{category.catName}</Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}

// app/components/FeaturedProducts.tsx
import React from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import ProductCard from "./ProductCard";
import { products } from "../data/sample-product";

const renderItem = ({ item }: { item: Product }) => (
  <ProductCard
    product={item}
    viewClassName="mr-4 p-2"
    textClassName="text-xs"
    imageResize={{ width: 128, height: 128 }}
  />
);

export default function FeaturedProducts() {
  return (
    <View className="p-4">
      <Text className="text-xl font-bold mb-2">Featured Products</Text>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

import React from "react";
import { View, FlatList, Text } from "react-native";
import { Product, products } from "../data/sample-product";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const renderItem = ({ item }: { item: Product }) => (
    <ProductCard product={item} />
  );

  return (
    <View className="p-4">
      <Text className="text-xl font-bold mb-2">Product List</Text>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-around" }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

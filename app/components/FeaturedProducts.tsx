// app/components/FeaturedProducts.tsx
import React from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import ProductCard from "./ProductCard";
import { products } from "../data/sample-product";

const renderItem = ({ item }: { item: Product }) => (
  <ProductCard product={item} />
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
      {/* ScrollView disabled for now */}
      {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ScrollView> */}
    </View>
  );
}

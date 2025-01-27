// app/components/FeaturedProducts.tsx
import React from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import ProductCard from "./ProductCard";
import { products } from "../data/sample-product";
import { Link } from "expo-router";

const renderItem = ({ item: product }: { item: Product }) => (
  <Link
    href={{
      pathname: "/(productId)/[id]/page",
      params: { id: product.id.toString() },
    }}
  >
    <ProductCard
      product={product}
      viewClassName="p-2"
      textClassName="text-sm"
      imageResize={{ width: 128, height: 128 }}
    />
  </Link>
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

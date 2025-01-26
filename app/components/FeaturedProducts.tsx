// app/components/FeaturedProducts.tsx
import React from "react";
import { View, Text, ScrollView } from "react-native";
import ProductCard from "./ProductCard";

const products: Product[] = [
  // Your product data here
  { id: 1, name: "Product 1", price: 20000, imageUrl: "..." },
  { id: 2, name: "Product 2", price: 15000, imageUrl: "..." },
  // Add more products
];

export default function FeaturedProducts() {
  return (
    <View className="p-4">
      <Text className="text-xl font-bold mb-2">Featured Products</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ScrollView>
    </View>
  );
}

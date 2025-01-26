// app/components/FeaturedProducts.tsx
import React from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import ProductCard from "./ProductCard";

const products: Product[] = [
  // Your product data here
  {
    id: 1,
    name: "Product 1",
    price: 20000,
    imageUrl:
      "http://images.stockcake.com/public/1/7/5/1757d530-abd0-4062-b29a-9b55d3da4f0a_medium/abundant-food-selection-stockcake.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    price: 15000,
    imageUrl:
      "http://images.stockcake.com/public/1/7/5/1757d530-abd0-4062-b29a-9b55d3da4f0a_medium/abundant-food-selection-stockcake.jpg",
  },
  {
    id: 3,
    name: "Product 3",
    price: 18000,
    imageUrl:
      "http://images.stockcake.com/public/1/7/5/1757d530-abd0-4062-b29a-9b55d3da4f0a_medium/abundant-food-selection-stockcake.jpg",
  },
  {
    id: 4,
    name: "Product 4",
    price: 28000,
    imageUrl:
      "http://images.stockcake.com/public/1/7/5/1757d530-abd0-4062-b29a-9b55d3da4f0a_medium/abundant-food-selection-stockcake.jpg",
  },
];

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

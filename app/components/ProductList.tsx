import React from "react";
import { View, FlatList, Text } from "react-native";
import { Product, products } from "../data/sample-product";
import ProductCard from "./ProductCard";
import { Link } from "expo-router";

export default function ProductList() {
  const renderItem = ({ item: product }: { item: Product }) => (
    <Link
      href={{
        pathname: "/(productId)/[id]/page",
        params: { id: product.id.toString() },
      }}
    >
      <ProductCard
        product={product}
        viewClassName="mb-2 p-2 sm:mr-4 sm:mb-4"
        textClassName="text-md"
        imageResize={{ width: 156, height: 156 }}
      />
    </Link>
  );

  return (
    <View className="p-4">
      <Text className="text-xl font-bold mb-2">Product List</Text>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperClassName="justify-between sm:justify-start"
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
      />
    </View>
  );
}

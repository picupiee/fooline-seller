// app/components/ProductCard.tsx
import React from "react";
import { View, Text, Image } from "react-native";

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

const ProductCard: React.FC<Product> = ({ product }) => {
  return (
    <View className="mr-4 border-black border-2">
      <Image
        source={{ uri: product.imageUrl }}
        className="w-32 h-32 rounded-lg"
      />
      <Text className="text-center mt-2">{product.name}</Text>
      <Text className="text-center text-gray-500">Rp {product.price}</Text>
    </View>
  );
};

export default ProductCard;

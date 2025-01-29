// app/components/ProductCard.tsx
import React from "react";
import { View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

interface ProductCardProps {
  viewClassName?: string;
  textClassName?: string;
  imageResize: { width: number; height: number };
}

const ProductCard: React.FC<Product> = ({
  product,
  viewClassName,
  textClassName,
  imageResize,
}) => {
  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(product.price);
  return (
    <View className={`${viewClassName}`}>
      <Image
        source={{ uri: product.imageUrl }}
        style={imageResize}
        className="rounded-md mb-2 w-32 h-32"
      />
      <Text className={`${textClassName}`}>{product.name}</Text>
      <Text className={`${textClassName} text-gray-500`}>{formattedPrice}</Text>
      <Pressable
        className="absolute top-3 right-3 opacity-60 active:opacity-100"
        onPress={() => console.log(product.name, "heart is pressed!")}
      >
        <MaterialCommunityIcons name="heart" size={20} color="red" />
      </Pressable>
    </View>
  );
};

export default ProductCard;

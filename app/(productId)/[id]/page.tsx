import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";
import { Image } from "expo-image";
import { products } from "../../data/sample-product";

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams(); // Access id from params

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <View>
        <Text>Page not found</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 items-center justify-center">
      <Image
        source={{ uri: product.imageUrl }}
        style={{ width: 200, height: 200 }}
        contentFit="cover"
      />
      <Text className="text-2xl font-bold my-4">{product.name}</Text>
      <Text className="text-xl text-gray-600">{product.price}</Text>
      {/* Add more product details here */}
    </View>
  );
}

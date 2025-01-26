import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function ProductDetails() {
  const { id } = useLocalSearchParams();

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <View>
      <Image
        source={{ uri: product.imageUrl }}
        style={{ width: 200, height: 200 }}
      />
      <Text>{product.name}</Text>
      <Text>{product.price}</Text>
    </View>
  );
}

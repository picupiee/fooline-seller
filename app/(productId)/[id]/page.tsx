import { router, useLocalSearchParams } from "expo-router";
import { View, Text, Pressable, ScrollView } from "react-native";
import { Image } from "expo-image";
import { products } from "../../data/sample-product";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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

  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(product.price);

  console.log(product.name, "is visited at", new Date().toTimeString());

  return (
    <ScrollView className="">
      <MaterialCommunityIcons
        name="arrow-left"
        size={26}
        color="black"
        className="absolute top-4 left-4 z-50 bg-gray-600/50 rounded-full p-2"
        onPress={() => router.replace("/(tabs)")}
      />
      <Image
        source={{ uri: product.imageUrl }}
        style={{ width: "100%", height: 300 }}
        contentFit="cover"
        className="rounded-lg"
      />
      <Text className="text-3xl font-bold ml-4 mt-4 mb-1">{product.name}</Text>
      <Text className="text-xl text-gray-600 ml-4">{formattedPrice}</Text>
      <View className="flex flex-col items-start ml-4 mt-4">
        <Text className="text-md text-gray-600">Category</Text>
        <Text className="text-md text-gray-600">{product.category}</Text>
        <Text className="text-xl text-black mt-10">Product Description</Text>
        <Text className="text-lg text-gray-600 mt-4">
          {product.description}
        </Text>
      </View>

      {/* Add more product details here */}
    </ScrollView>
  );
}

import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  Text,
  ActivityIndicator,
  Modal,
  Pressable,
  Alert,
} from "react-native";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db, auth } from "@/firebase";
import AddProductForm from "@/app/components/AddProductForm";
import { formatToIDR } from "@/app/utils/currencyFormatter";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image } from "expo-image";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Initialize loading as true
  const [isModalVisible, setModalVisible] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setModalVisible(true);
  };

  const handleDeleteDoc = async (productId) => {
    try {
      await deleteDoc(doc(db, "products", productId));
      Alert.alert("Success", "Product deleted successfully");
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product", error);
      Alert.alert("Error", "Failed to delete product. Please try again later");
    }
  };

  const fetchProducts = async () => {
    try {
      if (auth.currentUser) {
        const q = query(
          collection(db, "products"),
          where("sellerId", "==", auth.currentUser.uid)
        );
        const querySnapshot = await getDocs(q);
        const productsList = [];
        querySnapshot.forEach((doc) => {
          productsList.push({ id: doc.id, ...doc.data() });
        });
        setProducts(productsList);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      Alert.alert("Error", "Failed to fetch products. Please try again.");
    } finally {
      setLoading(false); // Set loading to false after fetch (success or error)
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View className="h-full p-2">
      <Modal
        visible={isModalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <AddProductForm
          onClose={() => {
            setModalVisible(false);
            setEditingProduct(null);
          }}
          onProductAdded={fetchProducts}
          initialData={editingProduct}
        />
      </Modal>

      {products.length === 0 ? (
        <View className="flex-1 justify-center items-center">
          <Text className="text-xl font-semibold text-gray-600">
            No products available.
          </Text>
          <Pressable
            onPress={() => {
              console.log("Button Pressed");
              setModalVisible(true);
            }}
            className="mt-4"
          >
            <Text className="py-2 px-4 rounded-md text-white bg-blue-600">
              Add a new Product
            </Text>
          </Pressable>
        </View>
      ) : (
        <>
          <View className="mt-1 px-4 flex-row items-center justify-between">
            <Text className="text-2xl font-semibold border-b-2">
              Your Products
            </Text>
            <Pressable
              onPress={() => setModalVisible(true)}
              className="flex items-center justify-center mt-4 mb-4"
            >
              <MaterialCommunityIcons
                name="plus-circle"
                size={30}
                color="black"
              />
            </Pressable>
          </View>
          <FlatList
            contentContainerStyle={{ paddingBottom: 150 }}
            showsVerticalScrollIndicator={false}
            data={products}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View className="flex-row items-center border-b-4 border-gray-300 mb-2">
                <Image
                  source={item.imageUrl}
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 10,
                    margin: 5,
                  }}
                />
                <View className="p-4 border-gray-200 flex-col items-start">
                  <Text className="text-lg font-semibold">{item.name}</Text>
                  <Text className="text-sm text-gray-600">
                    {item.description}
                  </Text>
                  <Text className="text-sm text-gray-800">
                    {formatToIDR(item.price)}
                  </Text>
                </View>
                <View className="absolute right-0">
                  <View className="flex flex-row items-center mr-2 gap-2">
                    <MaterialCommunityIcons
                      name="pencil"
                      size={18}
                      color="gray"
                      className="rounded-full p-2 active:border-black bg-gray-300 active:bg-gray-200"
                      onPress={() => handleEditProduct(item)} // Pass the product data here
                    />
                    <MaterialCommunityIcons
                      name="delete"
                      size={18}
                      color="gray"
                      className="rounded-full p-2 active:border-black bg-gray-300 active:bg-gray-200"
                      onPress={() => handleDeleteDoc(item.id)}
                    />
                  </View>
                </View>
              </View>
            )}
          />
        </>
      )}
    </View>
  );
}

// components/AddProductForm.tsx
import React, { useEffect, useState } from "react";
import { View, TextInput, Alert, Pressable, Text } from "react-native";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db, auth } from "@/firebase";

interface AddProductFormProps {
  onClose: () => void; // Callback to close the modal
  onProductAdded?: () => void;
  initialData?: {
    id?: string;
    name: string;
    description: string;
    price: string;
  };
}

const AddProductForm: React.FC<AddProductFormProps> = ({
  onClose,
  onProductAdded,
  initialData,
}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setDescription(initialData.description);
      setPrice(initialData.price);
    }
  }, [initialData]);

  const handleSubmit = async () => {
    if (!name || !description || !price) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    if (auth.currentUser) {
      try {
        if (initialData?.id) {
          // Editing an existing product
          const productRef = doc(db, "products", initialData.id);
          await updateDoc(productRef, {
            name,
            description,
            price: parseFloat(price),
          });
          Alert.alert("Success", "Product updated successfully!");
        } else {
          // Adding a new product
          await addDoc(collection(db, "products"), {
            sellerId: auth.currentUser.uid,
            name,
            description,
            price: parseFloat(price),
            createdAt: new Date(),
          });
          Alert.alert("Success", "Product added successfully!");
        }

        // Reset form fields
        setName("");
        setDescription("");
        setPrice("");

        // Close the modal and refresh the product list
        onClose();
        if (onProductAdded) onProductAdded();
      } catch (error) {
        console.error("Error:", error);
        Alert.alert("Error", "An error occurred. Please try again.");
      }
    }
  };

  return (
    <View className="p-4">
      <TextInput
        className="border p-2 mb-2"
        placeholder="Product Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        className="border p-2 mb-2"
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        className="border p-2 mb-2"
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <View className="mt-4 flex-row items-center justify-evenly">
        <Pressable onPress={handleSubmit}>
          <Text className="py-2 px-4 text-white bg-blue-600 font-semibold rounded-md">
            {initialData?.id ? "Update Product" : "Add Product"}
          </Text>
        </Pressable>
        <Pressable onPress={onClose}>
          <Text className="py-2 px-4 text-white bg-red-600 font-semibold rounded-md">
            Cancel
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AddProductForm;

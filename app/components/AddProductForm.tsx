import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  Alert,
  Pressable,
  Text,
  ActivityIndicator,
} from "react-native";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db, auth } from "@/firebase";
import { uploadImage } from "@/cloudinary";
import { pickImage } from "../utils/imagePicker";
import { Image } from "expo-image";

interface AddProductFormProps {
  onClose: () => void; // Callback to close the modal
  onProductAdded?: () => void;
  initialData?: {
    id?: string;
    name: string;
    description: string;
    price: string;
    imageUrl: string;
  };
}

const AddProductForm: React.FC<AddProductFormProps> = ({
  onClose,
  onProductAdded,
  initialData,
}) => {
  const [name, setName] = useState(initialData?.name || "");
  const [description, setDescription] = useState(
    initialData?.description || ""
  );
  const [price, setPrice] = useState(initialData?.price || "");
  const [imageUrl, setImageUrl] = useState(initialData?.imageUrl || "");
  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleImageUpload = async () => {
    const url = await pickImage();
    if (url) {
      setLoading(true); // Set loading to true when upload starts
      setUploadProgress(0);

      try {
        const uploadedUrl = await uploadImage(url, (progressEvent) => {
          const progress = Math.round(
            (progressEvent.loaded / progressEvent.total) * 100
          );
          setUploadProgress(progress);
          console.log(`Upload progress: ${progress}%`);
        }); // Upload to Cloudinary

        setImageUrl(uploadedUrl); // Set the image URL in state
        // console.log("Uploaded image response:", JSON.stringify(uploadedUrl));
      } catch (error) {
        console.error("Error uploading image:", error);
        Alert.alert(
          "Error",
          "Failed to upload a product image. Please try again!"
        );
      } finally {
        setLoading(false); // Set loading to false when upload completes
        setUploadProgress(0);
      }
    }
  };

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setDescription(initialData.description);
      setPrice(initialData.price);
      setImageUrl(initialData.imageUrl);
    }
  }, [initialData]);

  const handleSubmit = async () => {
    if (!name || !description || !price || !imageUrl) {
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
            imageUrl,
          });
          Alert.alert("Success", "Product updated successfully!");
        } else {
          // Adding a new product
          await addDoc(collection(db, "products"), {
            sellerId: auth.currentUser.uid,
            name,
            description,
            price: parseFloat(price),
            imageUrl,
            createdAt: new Date(),
          });
          Alert.alert("Success", "Product added successfully!");
        }

        // Reset form fields
        setName("");
        setDescription("");
        setPrice("");
        setImageUrl("");

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
      <Text className="mb-4 text-3xl font-semibold text-center border-b-2 border-gray-400 pb-2">
        New Product
      </Text>
      <TextInput
        className="border-b p-2 mb-4 rounded-md text-xl"
        placeholder="Product Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        className="border p-2 mb-2 rounded-md text-xl"
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        textAlignVertical="top"
        multiline={true}
        numberOfLines={8}
        style={{ height: 200 }}
      />
      <TextInput
        className="border-b p-2 mb-2 rounded-md text-xl"
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        style={{ height: 60 }}
      />
      <Pressable
        onPress={handleImageUpload}
        disabled={loading}
        className="mb-2 flex items-center justify-center"
      >
        {loading ? (
          <>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text>{uploadProgress}%</Text>
          </>
        ) : (
          <Text className="py-2 px-4 rounded-md text-white bg-yellow-400 text-lg mt-4 mb-4">
            {imageUrl ? "Change Image" : "Upload Image"}
          </Text>
        )}
      </Pressable>
      {imageUrl && (
        <View className="mt-4 mb-2 items-center">
          <Text className="font-semibold bg-green-200 py-4 px-2 rounded-md">
            Image uploaded successfully
          </Text>
        </View>
      )}
      <View className="mt-4 flex-row items-center justify-evenly">
        <Pressable onPress={handleSubmit}>
          <Text className="py-2 px-4 text-white bg-blue-600 font-semibold rounded-md text-lg">
            {initialData?.id ? "Update Product" : "Add Product"}
          </Text>
        </Pressable>
        <Pressable onPress={onClose}>
          <Text className="py-2 px-4 text-white bg-red-600 font-semibold rounded-md text-lg">
            Cancel
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AddProductForm;

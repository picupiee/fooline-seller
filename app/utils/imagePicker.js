// utils/imagePicker.js
import * as ImagePicker from "expo-image-picker";
import { Alert } from "react-native";

export const pickImage = async () => {
  const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (status !== "granted") {
    Alert.alert("Permission Denied", "Need camera roll permission to continue");
    return;
  }

  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ["images"],
    allowsEditing: true,
    aspect: [1, 1],
    quality: 0,
  });

  if (!result.canceled) {
    return result.assets[0].uri;
  }
};

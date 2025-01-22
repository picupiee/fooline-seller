import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";

export default function Home() {
  return (
    <View className="h-full">
      <View className="flex flex-col items-center justify-center mt-10">
        <Text className="bg-orange-400 rounded-full py-2 px-8 text-center text-white text-2xl font-bold">
          FooLine
        </Text>
      </View>
    </View>
  );
}

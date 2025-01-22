import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { BlurView } from "expo-blur";

export default function HeroSection() {
  return (
    <View>
      <ImageBackground
        source={require("@/assets/images/partial-react-logo.png")}
        className="w-full h-80"
      >
        <View className="flex-1 items-center justify-center">
          {/* <BlurView
            intensity={20}
            experimentalBlurMethod="dimezisBlurView"
            tint="light"
            className="p-10 overflow-hidden rounded-lg"
          > */}
          <Text className="text-black font-bold text-3xl">
            Welcome to FooLine
          </Text>
          <Text className="text-black font-semibold text-lg">
            Neighborhood Food Marketplace
          </Text>
          {/* </BlurView> */}
        </View>
      </ImageBackground>
    </View>
  );
}

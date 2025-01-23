import React, { useState, useEffect } from "react";
import { View, Text, ImageBackground } from "react-native";
import { BlurView } from "expo-blur";

export default function HeroSection() {

  const [tagline, setTagline] = useState("");
  const [hourGreeting, setHourGreeting] = useState("Morning");

  useEffect(() => {
    const date = new Date();
    const hour = date.getHours();
      if (hour < 12) {
         setTagline("It is a good time for a breakfast !");
         setHourGreeting("Morning")
      } else if (hour < 17) {
        setTagline("It is a good time for a lunch !");
        setHourGreeting("Afternoon")
      } else {
        setTagline("Let's end the day with good dinner from home !");
        setHourGreeting("Evening")
      }
  }, []);

  return (
    <View>
      {/* <ImageBackground
        source={require("@/assets/images/partial-react-logo.png")}
        className="w-full h-50 p-2"
      > */}
        <View className="flex items-start justify-center p-0">
          {/* <BlurView
            intensity={40}
            experimentalBlurMethod="dimezisBlurView"
            tint="light"
            className="p-2 overflow-hidden rounded-lg"
          > */}
          <View className="p-4">
            <Text className="text-black font-bold text-[40px]">
              Good {hourGreeting}
            </Text>
            <Text className="text-black font-semibold text-xl">
              {tagline}
            </Text>
          </View>
            {/* <Text className="text-black font-semibold text-xl">
            Explore and order your favorite food !
          </Text> */}
          {/* </BlurView> */}
        </View>
      {/* </ImageBackground> */}
    </View>
  );
}

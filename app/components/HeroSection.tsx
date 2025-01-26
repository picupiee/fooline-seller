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
      setTagline("It is a good time for a breakfast!");
      setHourGreeting("Morning");
    } else if (hour < 16) {
      setTagline("It is a good time for a lunch!");
      setHourGreeting("Afternoon");
    } else {
      setTagline("Let's end the day with good dinner from home!");
      setHourGreeting("Evening");
    }
  }, []);

  return (
    <View className="flex-1">
      <View>
        <View className="p-4">
          <Text className="text-black font-bold text-3xl">
            Good {hourGreeting}
          </Text>
          <Text className="text-black font-semibold text-xl">{tagline}</Text>
        </View>
      </View>
    </View>
  );
}

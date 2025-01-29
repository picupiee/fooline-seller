import React, { useState, useEffect } from "react";
import { View, Text, ImageBackground } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function HeroSection() {
  const tagline = "Let's start serve hungry people!";
  const [hourGreeting, setHourGreeting] = useState("Morning");
  const username = "PicuPiee";
  const [emoteGreet, setEmoteGreet] = useState<React.JSX.Element | null>(null);

  useEffect(() => {
    const date = new Date();
    const hour = date.getHours();
    if (hour < 12) {
      setHourGreeting("Morning");
      setEmoteGreet(
        <MaterialCommunityIcons name="weather-sunset" size={28} color="black" />
      );
    } else if (hour < 16) {
      setHourGreeting("Afternoon");
      setEmoteGreet(
        <MaterialCommunityIcons
          name="weather-partly-cloudy"
          size={28}
          color="black"
        />
      );
    } else {
      setHourGreeting("Evening");
      setEmoteGreet(
        <MaterialCommunityIcons name="weather-night" size={28} color="black" />
      );
    }
  }, []);

  return (
    <View className="flex-1">
      <View>
        <View className="p-4">
          <Text className="text-black font-bold text-3xl">
            Good {hourGreeting}, {username} {emoteGreet}
          </Text>
          <Text className="text-black font-semibold text-xl">{tagline}</Text>
        </View>
      </View>
    </View>
  );
}

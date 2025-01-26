import React from "react";
import "./globals.css";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ statusBarStyle: "dark" }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}

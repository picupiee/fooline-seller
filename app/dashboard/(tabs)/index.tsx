import { useEffect, useState } from "react";
import { ScrollView, ActivityIndicator, View } from "react-native";
import { useRouter } from "expo-router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase"; // Import your Firebase config
import HeroSection from "../../components/HeroSection";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const router = useRouter();

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is authenticated, allow access
        setIsLoading(false);
      } else {
        // User is not authenticated, redirect to root (AuthPage)
        router.replace("/");
      }
    });

    return unsubscribe; // Cleanup subscription on unmount
  }, []);

  // Show a loading indicator while checking authentication
  if (isLoading) {
    return (
      <SafeAreaProvider>
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      </SafeAreaProvider>
    );
  }

  return (
    <SafeAreaProvider>
      <ScrollView className="flex-1">
        {/* Components */}
        <HeroSection />
      </ScrollView>
    </SafeAreaProvider>
  );
}

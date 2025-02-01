import { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase"; // Import your Firebase config

export default function DashboardIndex() {
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const router = useRouter();

  useEffect(() => {
    // Set a minimum loading time (e.g., 2 seconds)
    const loadingTimer = setTimeout(() => {
      setIsLoading(false); // Stop loading after the timer ends
    }, 2000); // 2000ms = 2 seconds

    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is authenticated, redirect to the tabs
        router.replace("/dashboard/(tabs)");
      } else {
        // User is not authenticated, redirect to the AuthPage
        router.replace("/");
      }
    });

    // Cleanup function
    return () => {
      clearTimeout(loadingTimer); // Clear the timer if the component unmounts
      unsubscribe(); // Unsubscribe from the auth state listener
    };
  }, []);

  // Show a loading spinner while checking authentication
  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return null; // Render nothing after redirect
}

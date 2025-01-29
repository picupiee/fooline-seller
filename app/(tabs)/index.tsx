import { ScrollView } from "react-native";
import HeroSection from "../components/HeroSection";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <ScrollView className="flex-1 bg-white">
        {/* Components */}
        <HeroSection />
      </ScrollView>
    </SafeAreaProvider>
  );
}

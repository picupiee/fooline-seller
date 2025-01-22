import { ScrollView, Text, View } from "react-native";
import HeroSection from "../components/HeroSection";

export default function HomeScreen() {
    return (
      <ScrollView className="flex-1 bg-white">
        {/* Will add components in here */}
        {/* 
        <FeaturedProducts />
        <SearchBar />
        <Categories />
        */}
        <HeroSection />
      </ScrollView>
    );
  }
  
import { FlatList, ScrollView, Text, View } from "react-native";
import HeroSection from "../components/HeroSection";
import FeaturedProducts from "../components/FeaturedProducts";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import ProductList from "../components/ProductList";

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-white">
      {/* Components */}
      <HeroSection />
      <FeaturedProducts />
      <SearchBar />
      <Categories />
      <ProductList />
    </ScrollView>
  );
}

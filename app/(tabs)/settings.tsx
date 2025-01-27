import { useRouter } from "expo-router";
import { View, Text, ScrollView, TouchableOpacity, FlatList } from "react-native";


export default function Settings() {
  
const navigation = useRouter();

  return (
    <ScrollView className="h-full">
      <View className="mt-8 ml-8">
        <Text className=" text-black text-[40px] font-bold mb-10">
          Settings
        </Text>
        <View className="flex-col justify-start mr-10 gap-6 mb-10">
          <FlatList 
            data={[
              { key: "Account", route: "/(tabs)/(settings)/account" },
              { key: "Preferences", route: "/(tabs)/(settings)/preferences" },
              { key: "Transaction History", route: "/(tabs)/(settings)/trx-history" },
              { key: "Help", route: "/(tabs)/(settings)/help" },
            ]}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate(item.route)}
                className="bg-[#F5F5F5] rounded-lg p-4 w-[300px] h-[60px] flex-row justify-between items-center"
              >
                <Text className="text-black text-[20px]">{item.key}</Text>
                <Text className="text-black text-[20px]">></Text>
              </TouchableOpacity>
            )}
          scrollEnabled={false}
          />
        </View>
      </View>
    </ScrollView>
  );
}
